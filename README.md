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

## Ideas
1. Second player MUST always play for draw. (<i>Should Player 2 punish mistakes by human player? If it's a true-to-life bot it should!</i>)
2. First player MUST start playing for draw after no chances to win are present

<i>Now that I think more about this, it's easy to hardcode counter-play checks.
Should I do it? When Should I rely on the generated data and when on hardcoded
checks? Should I generate more games? Should I store defeats by player two?</i>

## Potential Algorithm
1. find games that match the current set of moves;
2. get first won game from the results;

<i>The first drawback that comes to my mind is that the first game where the
outcome is a win for this player might be a win because the opposing player has
made random moves after the current move in the <b>chosen game</b>.<br>
Applying the same logic on the next move will not save the game because we're
going down a line of moves from the opposing player that might still be random.<br>
The <b>second step</b> should be broken down into steps that choose winning
against opponent that also tries to win OR some other criteria.</i>

<i>If perfect play means that <b>Player 2<b> can only play for <b>draw</b> then
I can discard all games where Player 2 has won.<br>
But then, will Player 2 ever play for winning? How do I take this in
consideration that?</i>

<b>Unit tests MUST be added...</b>