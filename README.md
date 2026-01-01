# tic-tac-toe

How do I use the data I have?<br>
Can I just filter the won games by move and is that going to be enough?<br>
Are there corner cases and what happens then?

Potential algorithm:
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

ahhh...

<b>Unit tests MUST be added...</b>