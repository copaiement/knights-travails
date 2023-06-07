import { knightMoves } from "./knights";
import './style.css';

let knightPos = [4, 4];

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
  const firstKnight = document.querySelector(`#x${knightPos[0]}y${knightPos[1]}`);
  firstKnight.firstChild.classList.remove('hidden');
  // add eventListeners
  addKnightListeners();
}

function addKnightListeners() {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => square.addEventListener('click', moveKnight));
}

function removeKnightListeners() {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => square.removeEventListener('click', moveKnight));
}

function moveKnight(e) {
  removeKnightListeners();
  const finish = idToArr(e.target.id);
  const results = knightMoves(knightPos, finish);
  displayResults(results);
  const path = results[3];
  const delay = 1000;
  let promise = Promise.resolve();
  path.forEach((move) => {
    promise = promise.then(() => {
      updateKnightPos(knightPos, move);
      return new Promise((resolve) => {
        setTimeout(resolve, delay);
      });
    });
  });
  promise.then(() => {
    addKnightListeners();
  });
}

function displayResults(results) {
  document.querySelector('#display1').textContent = results[0];
  document.querySelector('#display2').textContent = results[1];
  document.querySelector('#display3').textContent = results[2];
}

function idToArr(id) {
  return [parseInt(id.charAt(1), 10), parseInt(id.charAt(3), 10)];
}

function updateKnightPos(last, next) {
  const lastSq = document.querySelector(`#x${last[0]}y${last[1]}`);
  lastSq.firstChild.classList.add('hidden');
  const nextSq = document.querySelector(`#x${next[0]}y${next[1]}`);
  nextSq.firstChild.classList.remove('hidden');
  knightPos = next;
}

initializeGameboard();
