import { CellIndex } from "./model/CellIndex"
import { PlayerSymbol } from "./model/PlayerSymbol"
import { MovesGenerator } from "./MovesGenerator"
import { OutcomeChecker } from "./OutcomeChecker"

export class Bot {
    private readonly _gamesByLength: Array<number[]>

    constructor(games: Array<number[]>) {
        this._gamesByLength = [...games].sort((a, b) => a.length - b.length)
    }

    markCell(moves: number[] = []): CellIndex {
        if (moves.length === 9) {
            throw new Error("Can't make more moves.")
        }

        const moveNumber = moves.length
        if (moveNumber === 0) {
            return this.getFirstCell(moveNumber)
        }

        // TODO: figure out how to make Player 2 play for wins as well
        const expectedOutcome = OutcomeChecker.getPlayer(moveNumber) === PlayerSymbol.O ? -1 : PlayerSymbol.X
        return this.getCell(moves, moveNumber, expectedOutcome)
    }

    private getFirstCell(moveNumber: number) {
        const shortestWins = this._gamesByLength
            .filter(g => g.length === this._gamesByLength[0].length
                && g[g.length - 1] === PlayerSymbol.X)
        return shortestWins[MovesGenerator.getRandomInt(shortestWins.length)][moveNumber]
    }

    private getCell(moves: number[], moveNumber: number, winner: PlayerSymbol | -1) {
        let games = this._gamesByLength.filter(g => g.length >= moveNumber + 1)
        for (let i = 0; i < moveNumber; i++) {
            games = games.filter(g => g[i] === moves[i] && g[g.length - 1] === winner)
        }

        // Start playing for the draw
        if (games.length === 0) {
            for (let i = 0; i < moveNumber; i++) {
                games = games.filter(g => g[i] === moves[i] && g[g.length - 1] === -1)
            }
        }

        // Wing it
        if (games.length === 0) {
            return this.getRandomFreeCell(moves)
        }

        const game = games[MovesGenerator.getRandomInt(games.length)]
        return game[moveNumber]
    }

    private getRandomFreeCell(moves: number[]) {
        const availableCells = MovesGenerator.CELLS.filter(m => !moves.includes(m))
        console.log('DEBUG ---------------', 'availableCells', availableCells)
        return availableCells[MovesGenerator.getRandomInt(availableCells.length)]
    }
}