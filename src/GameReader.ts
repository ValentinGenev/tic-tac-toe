import { CellIndex } from "./model/CellIndex";
import { PlayerSymbol } from "./model/PlayerSymbol";

export class GameReader {
    private readonly WIN_CONDITIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    private readonly _moves: CellIndex[]
    private readonly _winner: PlayerSymbol | null
    private readonly _winningMove: number | null

    constructor(moves: number[]) {
        this._moves = moves
        this._winner = null
        this._winningMove = null

        const movesByPlayer = moves.map((c, i) => ({ cell: c, player: this.getPlayer(i), move: i }))
        for (const condition of this.WIN_CONDITIONS) {
            const matches = movesByPlayer.filter(m => condition.indexOf(m.cell) >= 0)
            if (matches.length === 3 && this.isSamePlayer(matches)) {
                this._winner = matches[0].player
                this._winningMove = matches[2].move
            }
        }
    }

    private getPlayer(move: number) {
        return move % 2 ? PlayerSymbol.O : PlayerSymbol.X
    }

    private isSamePlayer(moves: Array<{ cell: number, player: PlayerSymbol }>) {
        const player = moves[0].player
        return moves.findIndex(m => m.player !== player) >= 0 ? false : true
    }

    getGame(): (number | null)[] {
        const meaningfulMoves = this._winningMove ? this._moves.slice(0, this._winningMove) : this._moves
        return [...meaningfulMoves, this._winner]
    }
}