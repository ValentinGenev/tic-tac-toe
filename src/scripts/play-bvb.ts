import { Bot } from "../Bot";
import * as fs from 'fs';
import { OutcomeChecker } from "../OutcomeChecker";

const MAX_MOVES = 9
const games: Array<number[]> = JSON.parse(fs.readFileSync('data/games.json', 'utf-8'))

const bot1 = new Bot(games)
const bot2 = new Bot(games)
const finishedGames = []

for (let i = 0; i < 1000; i++) {
    let botMoves: number[] = []
    for (let y = 0; y < MAX_MOVES; y++) {
        if (y % 2 === 0) {
            botMoves.push(bot1.markCell(botMoves))
        } else {
            botMoves.push(bot2.markCell(botMoves))
        }

        const outcome = OutcomeChecker.checkOutcome(botMoves)
        if (outcome.winner !== null) {
            finishedGames.push(outcome)
            console.log('DEBUG ---------------', 'botMoves', botMoves)
            break
        }
    }
}

console.warn('WARN ---------------', `Won by Player 1: ${finishedGames.filter(g => g.winner === 0).length}`)
console.warn('WARN ---------------', `Won by Player 2: ${finishedGames.filter(g => g.winner === 1).length}`)