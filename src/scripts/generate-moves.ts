import { MovesGenerator } from "../MovesGenerator"
import * as fs from 'fs';

// Somewhere between 4,000,000 and 5,000,000 the maximum games are reached 255,168
const gamesCount = 5000000
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