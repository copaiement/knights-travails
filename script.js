//import { knightMoves } from "./knights";

function initializeGameboard() {
  const gameboard = document.querySelector('.gameboard');
  let colorToggle = 'b';
  for (let y = 7; y >= 0; y--) {
    if (y % 2 !== 0) {
      colorToggle = 'b';
    } else {
      colorToggle = 'w';
    }
    for (let x = 0; x < 8; x++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.id = `x${x}y${y}`;
      if (colorToggle === 'b') {
        square.classList.add('black');
        colorToggle = 'w';
      } else {
        square.classList.add('white');
        colorToggle = 'b';
      }
      gameboard.appendChild(square);
      // add svg to each square
      const knightImg = document.createElement('img');
      knightImg.src = './images/chess-knight.png';
      knightImg.classList.add('hidden');
      square.appendChild(knightImg);
    }
  }
  // add start image
  const firstKnight = document.querySelector('#x4y4');
  firstKnight.firstChild.classList.remove('hidden');
  // add eventListeners
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => square.addEventListener('click', moveKnight));
}

function addEventListeners() {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => square.addEventListener('click', moveKnight));
}

function moveKnight(e) {
  const target = e.target.id;
  console.log(target);
  const finish = idToArr(target);
  console.log(finish);
}

function idToArr(id) {
  return [parseInt(id.charAt(1), 10), parseInt(id.charAt(3), 10)];
}

initializeGameboard();

