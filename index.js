let playerType = true; // this mean that X will write
let squares = []; // this array will contain with 3 number of squares
// create func to reset the page when one of players wins
const reset = (i, j, k) => {
  document.getElementById("A" + i).style.color = "orange";
  document.getElementById("A" + j).style.color = "orange";
  document.getElementById("A" + k).style.color = "orange";
  setTimeout(() => {
    location.reload();
  }, 3000);
};

// create func to check who player win
const winnerCheck = () => {
  //looping for nums between 1 - 9 for 9 squares
  for (let i = 1; i <= 9; i++) {
    squares[i] = document.getElementById("A" + i).innerHTML;
  }
  //vertical check
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != ""
  ) {
    alert("player " + squares[1] + " win the game");
    reset(1, 2, 3);
  }
  if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[4] != ""
  ) {
    alert("player" + squares[1] + "win the game");
    reset(4, 5, 6);
  }
  if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[7] != ""
  ) {
    alert("player" + squares[1] + "win the game");
    reset(7, 8, 9);
  }
  //horizontal check
  if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[1] != ""
  ) {
    alert("player" + squares[1] + "win the game");
    reset(1, 4, 7);
  }
  if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[2] != ""
  ) {
    alert("player" + squares[1] + "win the game");
    reset(2, 5, 8);
  }
  if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[3] != ""
  ) {
    alert("player" + squares[1] + "win the game");
    reset(3, 6, 9);
  }
  //diagonal check
  if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[1] != ""
  ) {
    alert("player" + squares[1] + "win the game");
    reset(1, 5, 9);
  }
  if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[3] != ""
  ) {
    alert("player" + squares[1] + "win the game");
    reset(3, 5, 7);
  }
};

const insertToSquare = (id) => {
  let elementId = document.getElementById(id);
  if (playerType && elementId.innerHTML == "") {
    elementId.innerHTML = " X ";
    elementId.classList.add("x");
    playerType = !playerType;
  } else if (!playerType && elementId.innerHTML == "") {
    elementId.innerHTML = " O ";

    elementId.classList.add("o");
    playerType = !playerType;
  } else {
    alert("no players wins");
  }

  winnerCheck();
};
