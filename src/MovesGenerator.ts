import { CellIndex } from "./model/CellIndex"

export class MovesGenerator {
    static readonly CELLS = [0, 1, 2, 3, 4, 5, 6, 7, 8]

    private readonly _moves = new Array<CellIndex>(MovesGenerator.CELLS.length)
    private readonly _availableCells = new Set(MovesGenerator.CELLS)
    private _moveNumber = 0

    doUntilFull(): CellIndex[] {
        if (this._availableCells.size === 0) {
            return this._moves
        }

        const currentCell = MovesGenerator.getRandomInt(MovesGenerator.CELLS.length)
        if (this._availableCells.has(currentCell)) {
            this._moves[this._moveNumber] = currentCell
            this._moveNumber++
            this._availableCells.delete(currentCell)
        }

        return this.doUntilFull()
    }

    static getRandomInt(max: number) {
        return Math.floor(Math.random() * max)
    }
}
