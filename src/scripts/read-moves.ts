import { CellIndex } from "../model/CellIndex";
import { GameReader } from "../GameReader";
import * as fs from 'fs';

const movesSets: Array<CellIndex[]> = JSON.parse(fs.readFileSync('data/moves.json', 'utf-8'))
const gamesAsJson = new Array<string>(movesSets.length)

for (const i in movesSets) {
    gamesAsJson[i] = JSON.stringify(new GameReader(movesSets[i]).getGame())
}
const games = [...new Set(gamesAsJson)].map(g => JSON.parse(g))

fs.mkdirSync('data', { recursive: true })
fs.writeFileSync('data/games.json', JSON.stringify(games, null))

console.info('INFO ---------------', `Created games: ${games.length}`)
console.info('INFO ---------------', `1 won (131,184): ${games.filter(g => g[g.length - 1] === 0).length}`)
console.info('INFO ---------------', `2 won (77,904): ${games.filter(g => g[g.length - 1] === 1).length}`)
console.info('INFO ---------------', `Draws (46,080): ${games.filter(g => g[g.length - 1] === -1).length}`)