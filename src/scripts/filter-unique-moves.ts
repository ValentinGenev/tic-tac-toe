import { CellIndex } from "../model/CellIndex";
import * as fs from 'fs';

const movesSets: Array<CellIndex[]> = JSON.parse(fs.readFileSync('data/moves.json', 'utf-8'))
const movesSetsAsJson = new Array<string>(movesSets.length)

for (const i in movesSets) {
    movesSetsAsJson[i] = JSON.stringify(movesSets[i])
}
const uniqueGames = [...new Set<string>(movesSetsAsJson)].map(m => JSON.parse(m))

fs.mkdirSync('data', { recursive: true })
fs.writeFileSync('data/unique-moves.json', JSON.stringify(uniqueGames, null))

console.info('INFO ---------------', `Unique move sets: ${uniqueGames.length}`)