import { CellIndex } from "../model/CellIndex";
import { GameReader } from "../GameReader";
import * as fs from 'fs';

const movesData: Array<CellIndex[]> = JSON.parse(fs.readFileSync('data/unique-moves.json', 'utf-8'))
const gamesAsJson = new Array<string>(movesData.length)

for (const i in movesData) {
    gamesAsJson[i] = JSON.stringify(new GameReader(movesData[i]).getGame())
}
const games = [...new Set(gamesAsJson)].map(g => JSON.parse(g))

fs.mkdirSync('data', { recursive: true })
fs.writeFileSync('data/games.json', JSON.stringify(games, null))

console.info('INFO ---------------', `Created games: ${games.length}`)