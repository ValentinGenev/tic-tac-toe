import { CellIndex } from "./model/CellIndex"
import { PlayerSymbol } from "./model/PlayerSymbol"
import { MovesGenerator } from "./MovesGenerator"
import { OutcomeChecker } from "./OutcomeChecker"

export class Bot {
    private readonly _gamesByLength: Array<number[]>

    constructor(games: Array<number[]>) {
        // FIXME: this is the only bit of coded game knowledge so far:
        //  going for the shortest games first
        this._gamesByLength = [...games].sort((a, b) => a.length - b.length)
    }

    markCell(moves: number[] = []): CellIndex {
        if (moves.length === 9) {
            throw new Error("Can't make more moves.")
        }

        const moveNumber = moves.length
        return this.getCell(moves, moveNumber, OutcomeChecker.getPlayer(moveNumber))
    }

    private getCell(moves: number[], moveNumber: number, winner: PlayerSymbol) {
        let games = this._gamesByLength.filter(g => g.length >= moveNumber + 1)
        for (let i = 0; i < moveNumber; i++) {
            games = games.filter(g => g[i] === moves[i] && g[g.length - 1] === winner)
        }

        if (games.length === 0) {
            for (let i = 0; i < moveNumber; i++) {
                games = games.filter(g => g[i] === moves[i] && g[g.length - 1] === -1)
            }
        }

        if (games.length === 0) {
            // never reached but here just in case...
            return this.getRandomFreeCell(moves)
        }

        const game = games[0]
        return game[moveNumber]
    }

    private getRandomFreeCell(moves: number[]) {
        console.warn('WARN ---------------', "we're in Random World again...")
        const availableCells = MovesGenerator.CELLS.filter(m => !moves.includes(m))
        return availableCells[MovesGenerator.getRandomInt(availableCells.length)]
    }
}