import { CellIndex } from "./model/CellIndex"
import { GameCreator } from "./model/GameCreator"
import * as fs from 'fs';

// After 1500000 the grow of the number of unique games stops to slow
const gamesCount = 1500000
const movesDatabase = new Array<CellIndex[]>(gamesCount)
for (let i = 0; i < movesDatabase.length; i++) {
    const creator = new GameCreator()
    movesDatabase[i] = creator.createRandomMove()
}

fs.mkdirSync('database', { recursive: true })
fs.writeFileSync('database/moves.json', JSON.stringify(movesDatabase, null))

console.info('INFO ---------------', `Generated games: ${gamesCount}`)