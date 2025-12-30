import { GameCreator } from "./GameCreator";
import { CellIndex } from "./CellIndex";
import * as fs from 'fs';

const gamesCount = 100
const movesDatabase = new Array<CellIndex[]>(gamesCount)
for (let i = 0; i < movesDatabase.length; i++) {
    const creator = new GameCreator()
    movesDatabase[i] = creator.createRandomMove()
}

fs.mkdirSync('database', { recursive: true })
fs.writeFileSync('database/moves.json', JSON.stringify(movesDatabase, null))