import { CellIndex } from "./model/CellIndex";
import * as fs from 'fs';

const games: Array<CellIndex[]> = JSON.parse(fs.readFileSync('database/moves.json', 'utf-8'))
const gamesAsJson = new Array<string>(games.length)

for (const i in games) {
    gamesAsJson[i] = JSON.stringify(games[i])
}
const uniqueGames = new Set<string>(gamesAsJson)

console.log('DEBUG ---------------', games.length)
console.log('DEBUG ---------------', uniqueGames.size)