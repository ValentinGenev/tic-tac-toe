import { CellIndex } from "../model/CellIndex";
import { GameReader } from "../GameReader";
import { Game } from "../model/Game";
import * as fs from 'fs';

const movesData: Array<CellIndex[]> = JSON.parse(fs.readFileSync('data/unique-moves.json', 'utf-8'))
const games = new Array<Game>(movesData.length)

for (const i in movesData) {
    games[i] = new GameReader(movesData[i]).getGame()
}

fs.mkdirSync('data', { recursive: true })
fs.writeFileSync('data/games.json', JSON.stringify(games, null))

console.info('INFO ---------------', `Created games: ${games.length}`)