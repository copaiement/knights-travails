function initializeGameboard() {
  const gameboard = document.querySelector('.gameboard');
  let colorToggle = 'b';
  for (let i = 1; i <= 64; i ++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.id = `s${i}`;
    if (colorToggle === 'b' && i % 8 === 0) {
      square.classList.add('black');
    } else if (colorToggle === 'w' && i % 8 === 0) {
      square.classList.add('white');
    } else if (colorToggle === 'b') {
      square.classList.add('black');
      colorToggle = 'w';
    } else {
      square.classList.add('white');
      colorToggle = 'b';
    }
    gameboard.appendChild(square);
  }

  const start = document.querySelector('#s36');
  const svg = document.createElement('img');
  svg.src = './images/knight.svg';
  start.appendChild(svg);
}

initializeGameboard();