import { Bot } from "../Bot";
import * as fs from 'fs';
import { OutcomeChecker } from "../OutcomeChecker";

const MAX_MOVES = 9
const games: Array<number[]> = JSON.parse(fs.readFileSync('data/games.json', 'utf-8'))

const bot1 = new Bot(games)
const bot2 = new Bot(games)
const botMoves: number[] = []
let outcome
for (let i = 0; i < MAX_MOVES; i++) {
    if (i % 2 === 0) {
        botMoves.push(bot1.markCell(botMoves))
    } else {
        botMoves.push(bot2.markCell(botMoves))
    }

    outcome = OutcomeChecker.checkOutcome(botMoves)
    if (outcome.winner != null) {
        break
    }
}
console.log('DEBUG ---------------', 'botMoves', botMoves)
console.log('DEBUG ---------------', 'outcome', outcome)