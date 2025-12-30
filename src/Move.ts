import { PlayerSymbol } from "./PlayerSymbols"

export class Move {
    constructor(
        private _number: number,
        private _cell: number,
        private _symbol: PlayerSymbol
    ) { }

    get number() {
        return this._number
    }

    get cell() {
        return this._cell
    }

    get symbol() {
        return this._symbol
    }
}