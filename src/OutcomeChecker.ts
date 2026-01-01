import { CellIndex } from "./model/CellIndex";
import { PlayerSymbol } from "./model/PlayerSymbol";

export abstract class OutcomeChecker {
    private static readonly WIN_CONDITIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    /**
     * @param moves a list of Cell Indexes in the order in which they were played hence 'moves'
     * @returns the first winning match or an "empty" object
     */
    public static checkOutcome(moves: CellIndex[]) {
        const movesByPlayer = moves.map((c, i) => ({ cell: c, player: OutcomeChecker.getPlayer(i), move: i }))
        const matches = []
        for (const condition of this.WIN_CONDITIONS) {
            const match = movesByPlayer.filter(m => condition.indexOf(m.cell) >= 0)
            if (match.length === 3 && OutcomeChecker.isSamePlayer(match)) {
                matches.push({ winner: match[0].player, winningMove: match[2].move })
            }
        }

        if (matches.length === 0) {
            return { winner: null, winningMove: null }
        }
        return matches.sort((a, b) => a.winningMove - b.winningMove)[0]
    }

    private static getPlayer(moveNumber: number) {
        return moveNumber % 2 ? PlayerSymbol.O : PlayerSymbol.X
    }

    private static isSamePlayer(moves: Array<{ cell: number, player: PlayerSymbol }>) {
        const player = moves[0].player
        return moves.findIndex(m => m.player !== player) >= 0 ? false : true
    }
}