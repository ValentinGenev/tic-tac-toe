import { CellIndex } from "./CellIndex"

export class GameCreator {
    static readonly CELLS = [0, 1, 2, 3, 4, 5, 6, 7, 8]

    private readonly _moves = new Array<CellIndex>(GameCreator.CELLS.length)
    private readonly _availableCells = new Set(GameCreator.CELLS)
    private _moveNumber = 0

    createRandomMove(): CellIndex[] {
        if (this._availableCells.size === 0) {
            return this._moves
        }

        const currentCell = GameCreator.getRandomInt(GameCreator.CELLS.length)
        if (this._availableCells.has(currentCell)) {
            this._moves[this._moveNumber] = currentCell
            this._moveNumber++
            this._availableCells.delete(currentCell)
        }

        return this.createRandomMove()
    }

    static getRandomInt(max: number) {
        return Math.floor(Math.random() * max)
    }
}
