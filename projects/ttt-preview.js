let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
let a = 0;
let gameOver = false;
function handleBoxClick(row, col, element) {
  if (board[row][col] !== '' || gameOver) return;
  const symbol = a === 0 ? 'X' : 'O';
  element.innerHTML = symbol;
  board[row][col] = symbol;
    if (checkWinner(symbol)) {
      document.getElementById("result").innerHTML = 'Result : ' + symbol + ' wins!';
      gameOver = true;
      return;
    }
  if (isDraw()) {
    alert("It's a draw!");
    gameOver = true;
    return;
  }
  a = 1 - a;
}
function checkWinner(symbol) {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === symbol && board[i][1] === symbol && board[i][2] === symbol ||
      board[0][i] === symbol && board[1][i] === symbol && board[2][i] === symbol
    ) {
      return true;
    }
  }
  if (
    board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol ||
    board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol
  ) {
    return true;
  }
  return false;
}
function isDraw() {
  return board.flat().every(cell => cell !== '');
}
function resetGame() {
    document.getElementById("result").innerHTML = 'Result : ';
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    a = 0;
    gameOver = false;
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`c${i}`).innerHTML = '';
    }
}
for (let i = 1; i <= 9; i++) {
    const element = document.getElementById(`c${i}`);
    const row = Math.floor((i - 1) / 3);
    const col = (i - 1) % 3;
    element.addEventListener('click', () => handleBoxClick(row, col, element));
}
document.getElementById("reset").addEventListener('click', resetGame);