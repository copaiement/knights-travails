// node factory with attribute for data stored and next possible moves
function KnightNode(position, path) {
  return {
    position,
    path,
    moves: [],
  };
}

// gameboard class that builds tree of possible moves
class Gameboard {
  constructor(start) {
    this.root = this.buildKnight(start, []);
  }

  buildKnight(start, path) {
    const knight = KnightNode(start, path);
    return knight;
  }

  // check if win
  #checkWin(start, finish) {
    const startArr = start.position;
    if (startArr[0] === finish[0] && startArr[1] === finish[1]) {
      return true;
    }
    return false;
  }

  // check that a move is valid
  // true if valid, false if not
  #checkMove(move) {
    if (move[0] >= 0 && move[0] < 8 && move[1] >= 0 && move[1] < 8) return true;
    return false;
  }

  #possibleMoves(start) {
    const mValues = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];
    let moves = [];
    mValues.forEach((value) => {
      const x = value[0] + start[0];
      const y = value[1] + start[1];
      if (x >= 0 && x < 8 && y >= 0 && y < 8) moves.push([x, y]);
    });
    return moves;
  }

  buildMoves(finish, queue = [this.root]) {
    // pull the first value from queue
    const qHead = queue.shift();
    // return if null
    if (qHead === null) return null;
    // pull start array vals
    const start = qHead.position;
    // check if we reached finish
    if (!this.#checkWin(qHead, finish)) {
      // get possible moves
      const moves = this.#possibleMoves(start);
      moves.forEach((move) => {
        const knight = this.buildKnight(move);
        knight.path = qHead.path.concat([move]);
        qHead.moves.push(knight);
        queue.push(knight);
      });

      return this.buildMoves(finish, queue);
    }
    return qHead;
  }
}

// knightMoves function that gives shortest path btw two squares
// return error for impossible moves (outside board)
function knightMoves(start, finish) {
  // set up class
  let knight = new Gameboard(start);
  let moves = knight.buildMoves(finish).path;
  let numMoves = moves.length;

  // Path output string
  let pathStr = `[${start}]`;
  moves.forEach((move) => {
    pathStr += `, [${move}]`;
  });
  // Console.log results
  console.log(`Start: [${start}], Finish: [${finish}]`);
  console.log(`Shortest path is ${numMoves} moves.`);
  console.log(`Path: ${pathStr}`);
}

export {
  knightMoves
};
