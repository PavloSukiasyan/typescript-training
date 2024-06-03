/**
 * 
 * Rock Paper Scissors

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
 */

export function rps(p1: string, p2: string): string {
  if (p1 === p2) {
    return 'Draw!';
  }
  if (
    (p1 === 'rock' && p2 === 'scissors') ||
    (p1 === 'scissors' && p2 === 'paper') ||
    (p1 === 'paper' && p2 === 'rock')
  ) {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
}

// from other answers
interface Game {
  rock: string;
  paper: string;
  scissors: string;
}
export function rpsInterface(p1: string, p2: string): string {
  let game = {
    rock: { beats: 'scissors' },
    paper: { beats: 'rock' },
    scissors: { beats: 'paper' },
  };

  if (p1 === p2) {
    return 'Draw!';
  }
  let message = (n: string) => `Player ${n} won!`;

  if (game[p1 as keyof Game].beats === p2) {
    return message('1');
  }
  if (game[p2 as keyof Game].beats === p1) {
    return message('2');
  }
  return '';
}

console.log(rpsInterface('rock', 'scissors'));
