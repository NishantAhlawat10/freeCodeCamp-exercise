const cols = document.querySelectorAll(".col");
let currentPlayer = "X";

// for winning condition we check by using array
// either row and either column or diagonal
// id === 0,1,2 id === 3,4,5 id === 6,7,8
// col === 0,3,6 col === 1,4,7 col === 2,5,8
// diagonal === 0,4,8  2,4,6

function resetGame() {
  arr.fill(null);
  cols.forEach((col) => {
    col.innerText = "";
  });
  currentPlayer = "X";
}
function checkWinner() {
  if (
    (arr[0] === arr[1] && arr[1] === arr[2] && arr[2] === currentPlayer) ||
    (arr[3] === arr[4] && arr[4] === arr[5] && arr[5] === currentPlayer) ||
    (arr[6] === arr[7] && arr[7] === arr[8] && arr[8] === currentPlayer) ||
    (arr[0] === arr[3] && arr[3] === arr[6] && arr[6] === currentPlayer) ||
    (arr[1] === arr[4] && arr[4] === arr[7] && arr[7] === currentPlayer) ||
    (arr[2] === arr[5] && arr[5] === arr[8] && arr[8] === currentPlayer) ||
    (arr[0] === arr[4] && arr[4] === arr[8] && arr[8] === currentPlayer) ||
    (arr[2] === arr[4] && arr[4] === arr[6] && arr[6] === currentPlayer)
  ) {
    setTimeout(() => {
      alert(`player ${currentPlayer} wins!`);
      resetGame();
    }, 100);
    return true; // Reset to player X after a win
  }

  // check for draw
  // if all col are filled and no winner then draw
  if (arr.every((col) => col !== null)) {
    setTimeout(() => {
      alert(`Game is a draw!`);
      resetGame();
    }, 100);
    return true; // Reset to player X after a draw
  }
}

const arr = new Array(9).fill(null);

cols.forEach((col) => {
  col.addEventListener("click", () => {
    if (col.innerText === "") {
      arr[col.id] = currentPlayer;
      col.textContent = currentPlayer;
      const gameEnded = checkWinner();
      if (!gameEnded) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  });
});
