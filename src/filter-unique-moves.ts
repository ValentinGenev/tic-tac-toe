import { CellIndex } from "./model/CellIndex";
import * as fs from 'fs';

const moves: Array<CellIndex[]> = JSON.parse(fs.readFileSync('database/moves.json', 'utf-8'))
const movesAsJson = new Array<string>(moves.length)

for (const i in moves) {
    movesAsJson[i] = JSON.stringify(moves[i])
}
const uniqueGames = [...new Set<string>(movesAsJson)].map(m => JSON.parse(m))

fs.mkdirSync('database', { recursive: true })
fs.writeFileSync('database/unique-moves.json', JSON.stringify(uniqueGames, null))

console.info('INFO ---------------', `Unique games: ${uniqueGames.length}`)