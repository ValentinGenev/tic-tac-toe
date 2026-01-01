import { CellIndex } from "./model/CellIndex"
import { PlayerSymbol } from "./model/PlayerSymbol"
import { OutcomeChecker } from "./OutcomeChecker"

export class Bot {
    private readonly _gamesByLength: Array<number[]>

    constructor(games: Array<number[]>) {
        this._gamesByLength = [...games].sort((a, b) => a.length - b.length)
    }

    markCell(moves: number[] = []): CellIndex {
        const moveNumber = moves.length
        if (moveNumber === 0) {
            return this.getFirstCell(moveNumber)
        }

        const expectedOutcome = OutcomeChecker.getPlayer(moveNumber) === PlayerSymbol.O ? -1 : PlayerSymbol.X
        return this.getCell(moves, moveNumber, expectedOutcome)
    }

    private getFirstCell(moveNumber: number) {
        const shortestWins = this._gamesByLength
            .filter(g => g.length === this._gamesByLength[0].length
                && g[g.length - 1] === PlayerSymbol.X)
        return shortestWins[this.getRandomInt(shortestWins.length)][moveNumber]
    }

    private getCell(moves: number[], moveNumber: number, winner: PlayerSymbol | -1) {
        let games = this._gamesByLength.filter(g => g.length >= moveNumber + 1)
        for (let i = 0; i < moveNumber; i++) {
            games = games.filter(g => g[i] === moves[i] && g[g.length - 1] === winner)
        }
        // FIXME: sometimes we don't have any games, in this case we need to fill a random left cell
        const game = games[this.getRandomInt(games.length)]
        return game[moveNumber]
    }

    private getRandomInt(max: number) {
        return Math.floor(Math.random() * max)
    }
}