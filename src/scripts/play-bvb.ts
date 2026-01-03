import { Bot } from "../Bot";
import * as fs from 'fs';
import { OutcomeChecker } from "../OutcomeChecker";

const MAX_MOVES = 9
const games: Array<number[]> = JSON.parse(fs.readFileSync('data/games.json', 'utf-8'))

const bot1 = new Bot(games)
const bot2 = new Bot(games)
let botMoves: number[] = []
const wonGames = []

for (let i = 0; i < 1000; i++) {
    for (let y = 0; y < MAX_MOVES; y++) {
        if (y % 2 === 0) {
            botMoves.push(bot1.markCell(botMoves))
        } else {
            botMoves.push(bot2.markCell(botMoves))
        }

        const outcome = OutcomeChecker.checkOutcome(botMoves)
        if (outcome.winner != null) {
            wonGames.push(outcome)
            break
        }
    }
    botMoves = []
}

console.warn('WARN ---------------', `wonGames: ${wonGames.length}`, wonGames)