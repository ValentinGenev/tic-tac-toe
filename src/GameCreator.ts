import { Move } from "./Move"
import { PlayerSymbol } from "./PlayerSymbols"

export class GameCreator {
    static readonly CELLS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    private readonly _moves = new Array<Move>(9)
    private readonly _availableCells = new Set(GameCreator.CELLS)
    private _moveNumber = 0

    createRandomMove(): Move[] {
        if (this._availableCells.size === 0) {
            return this._moves
        }

        const currentCell = GameCreator.getRandomInt(10)
        if (this._availableCells.has(currentCell)) {
            this._moves[this._moveNumber] = new Move(this._moveNumber, currentCell, this.getSymbol())
            this._moveNumber++
            this._availableCells.delete(currentCell)
        }

        return this.createRandomMove()
    }

    private getSymbol() {
        return this._moveNumber % 2 ? PlayerSymbol.O : PlayerSymbol.X
    }

    static getRandomInt(max: number) {
        return Math.floor(Math.random() * max)
    }
}
