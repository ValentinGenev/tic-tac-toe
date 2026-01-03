# tic-tac-toe

## Games Data Generation
1. `npm run generate-moves` does 5mil cycles of random filling of game boards
2. `npm run read-moves` gets the games of the moves

|Outcome|Number of Games|
|-|-|
|Unique games (considering rotations and reflections)|255,168|
|Games won by the first player|131,184|
|Games won by the second player|77,904|
|Draws|46,080|

## Goals
1. No game knowledge should be part of the source code.
2. Bot 1 MUST play for a **win**.
2. Bot 1 MUST never win.

### Bonus
1. Bot 2 MUST play for a **win** if a human is playing 'badly'.

## Questions
- How do I make Bot 2 play defense when Bot 1 is playing "good" and punish incompetent plays otherwise?
- Doing simulation by trying several games for up to 9 moves per turn for the bot players?
