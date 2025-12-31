import { CellIndex } from "./model/CellIndex"

export class MovesGenerator {
    private readonly CELLS = [0, 1, 2, 3, 4, 5, 6, 7, 8]

    private readonly _moves = new Array<CellIndex>(this.CELLS.length)
    private readonly _availableCells = new Set(this.CELLS)
    private _moveNumber = 0

    doUntilFull(): CellIndex[] {
        if (this._availableCells.size === 0) {
            return this._moves
        }

        const currentCell = this.getRandomInt(this.CELLS.length)
        if (this._availableCells.has(currentCell)) {
            this._moves[this._moveNumber] = currentCell
            this._moveNumber++
            this._availableCells.delete(currentCell)
        }

        return this.doUntilFull()
    }

    private getRandomInt(max: number) {
        return Math.floor(Math.random() * max)
    }
}
