import { CellIndex } from "./model/CellIndex";
import { PlayerSymbol } from "./model/PlayerSymbol";
import { OutcomeChecker } from "./OutcomeChecker";

export class GameReader {
    private readonly _moves: CellIndex[]
    private readonly _winner: PlayerSymbol | null
    private readonly _winningMove: number | null

    constructor(moves: number[]) {
        this._moves = moves

        const { winner, winningMove } = OutcomeChecker.checkOutcome(moves)
        this._winner = winner
        this._winningMove = winningMove
    }

    getGame(): number[] {
        const meaningfulMoves = this._winningMove ? this._moves.slice(0, this._winningMove + 1) : this._moves
        const winner = this._winner === null ? -1 : this._winner
        return [...meaningfulMoves, winner]
    }
}