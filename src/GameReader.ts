import { CellIndex } from "./model/CellIndex";
import { Game } from "./model/Game";
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

    private readonly _winner: PlayerSymbol | null
    private readonly _winningMoveNumber: number | null

    constructor(private readonly _moves: CellIndex[]) {
        this._winner = null
        this._winningMoveNumber = null

        const movesByPlayer = this._moves.map((c, i) => ({ cell: c, player: this.getPlayer(i), move: i }))
        for (const condition of this.WIN_CONDITIONS) {
            const matches = movesByPlayer.filter((moves) => condition.indexOf(moves.cell) >= 0)
            if (matches.length === 3 && this.isSamePlayer(matches)) {
                this._winner = matches[0].player
                this._winningMoveNumber = matches[2].move
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

    getGame(): Game {
        return {
            moves: this._moves,
            winner: this._winner,
            winningMoveNumber: this._winningMoveNumber
        }
    }
}