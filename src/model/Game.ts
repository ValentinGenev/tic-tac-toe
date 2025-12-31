import { CellIndex } from "./CellIndex";
import { PlayerSymbol } from "./PlayerSymbol";

export type Game = {
    moves: CellIndex[]
    winner: PlayerSymbol | null
    winningMoveNumber: number | null
}