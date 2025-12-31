import { MovesGenerator } from "../MovesGenerator"
import * as fs from 'fs';

// After 4000000 the grow of the number of unique games starts to slow
const gamesCount = 4000000
const movesSets = new Array<string>(gamesCount)
for (let i = 0; i < movesSets.length; i++) {
    const generator = new MovesGenerator()
    movesSets[i] = JSON.stringify(generator.doUntilFull())
}
const uniqueMovesSets = [...new Set(movesSets)].map(ms => JSON.parse(ms))

fs.mkdirSync('data', { recursive: true })
fs.writeFileSync('data/moves.json', JSON.stringify(uniqueMovesSets, null))

console.info('INFO ---------------', `Generated move sets: ${gamesCount}`)
console.info('INFO ---------------', `Stored unique sets: ${uniqueMovesSets.length}`)