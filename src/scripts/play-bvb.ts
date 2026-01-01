import { Bot } from "../Bot";
import * as fs from 'fs';
import { OutcomeChecker } from "../OutcomeChecker";

const games: Array<number[]> = JSON.parse(fs.readFileSync('data/games.json', 'utf-8'))

const bot1 = new Bot(games)
const bot2 = new Bot(games)
const botMoves: number[] = []
let outcome
for (let i = 0; i < 4; i++) {
    botMoves.push(bot1.markCell(botMoves))
    botMoves.push(bot2.markCell(botMoves))
    outcome = OutcomeChecker.checkOutcome(botMoves)
    if (outcome.winner != null) {
        break
    }
}
console.log('DEBUG ---------------', 'botMoves', botMoves)
console.log('DEBUG ---------------', 'outcome', outcome)