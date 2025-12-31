import { CellIndex } from "../model/CellIndex"
import { MovesGenerator } from "../MovesGenerator"
import * as fs from 'fs';

// After 1500000 the grow of the number of unique games starts to slow
const gamesCount = 1500000
const movesSets = new Array<CellIndex[]>(gamesCount)
for (let i = 0; i < movesSets.length; i++) {
    const generator = new MovesGenerator()
    movesSets[i] = generator.doUntilFull()
}

fs.mkdirSync('data', { recursive: true })
fs.writeFileSync('data/moves.json', JSON.stringify(movesSets, null))

console.info('INFO ---------------', `Generated move sets: ${gamesCount}`)