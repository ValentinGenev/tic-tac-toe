# tic-tac-toe

## Games Data Generation
1. `npm run generate-moves` does 5mil cycles of random filling of game boards
2. `npm run read-moves` gets the games of the moves

| Outcome| Number of Games |
|-|-|
| Unique games (considering rotations and reflections)|255,168|
|Games won by the first player|131,184|
|Games won by the second player|77,904|
|Draws|46,080|

## Goals
1. Now game knowledge should be part of the source code.
2. Player 2 MUST play for win if Player 1 is human who doesn't play for win.
3. Player 1 MUST never win.

How do I make Player 2 play defense when Player 1 is playing "good" and punish
incompetent plays otherwise?

Doing simulation by going several games in per turn for both bot players?<br>
<i>Knowing that the number of moves is always <= 9 we can do (9 - current move)
simulations with OutcomeChecker.</i>