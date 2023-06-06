// node factory with attribute for data stored and next possible moves
function KnightNode(position) {
  return {
    position,
    path: [],
    moves: [],
  };
}

// gameboard class that builds tree of possible moves
class Gameboard {
  constructor(start) {
    this.root = this.buildKnight(start);
    this.shortestPath = [];
  }

  buildKnight(start) {
    const knight = KnightNode(start);
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
    console.log(moves);
    return moves;
  }

  buildMoves2(finish, queue = [this.root]) {
    // pull the first value from queue
    const qHead = queue.shift();
    // return if null
    if (qHead === null) return null;
    // pull start array vals
    const start = qHead.position;
    // check if we reached finish
    while (!this.#checkWin(qHead, finish)) {
      // get possible moves
      const moves = this.#possibleMoves(start);
      moves.forEach((move) => {
        const knight = this.buildKnight(move);
        qHead.moves.push(knight);
        queue.push(knight);
        knight.path.push(start);
      });
      this.buildMoves2(finish, queue);
    }
    return qHead;
  }

  buildMoves(finish, queue = [this.root]) {
    // pull the first value from queue
    const qHead = queue.shift();
    // return if null
    if (qHead === null) return;
    // pull start array vals
    const start = qHead.position;
    // push value onto path
    //qHead.path.push(start);
    // return if finish reached
    if (this.#checkWin(qHead, finish)) {
      this.shortestPath = qHead.path;
      console.log(this.shortestPath);
      return;
    }
    // all possible move vars
    let m1 = [(start[0] + 1), (start[1] + 2)];
    let m2 = [(start[0] + 2), (start[1] + 1)];
    let m3 = [(start[0] + 2), (start[1] - 1)];
    let m4 = [(start[0] + 1), (start[1] - 2)];
    let m5 = [(start[0] - 1), (start[1] - 2)];
    let m6 = [(start[0] - 2), (start[1] - 1)];
    let m7 = [(start[0] - 2), (start[1] + 1)];
    let m8 = [(start[0] - 1), (start[1] + 2)];
    // recursive calls
    if (this.#checkMove(m1)) {
      qHead.m1 = KnightNode(m1);
      qHead.m1.path = qHead.path;
      qHead.m1.path.push(start);
      queue.push(qHead.m1);
    }
    if (this.#checkMove(m2)) {
      qHead.m2 = KnightNode(m2);
      qHead.m2.path = qHead.path;
      qHead.m2.path.push(start);
      queue.push(qHead.m2);
    }
    if (this.#checkMove(m3)) {
      qHead.m3 = KnightNode(m3);
      qHead.m3.path = qHead.path;
      qHead.m3.path.push(start);
      queue.push(qHead.m3);
    }
    if (this.#checkMove(m4)) {
      qHead.m4 = KnightNode(m4);
      qHead.m4.path = qHead.path;
      qHead.m4.path.push(start);
      queue.push(qHead.m4);
    }
    if (this.#checkMove(m5)) {
      qHead.m5 = KnightNode(m5);
      qHead.m5.path = qHead.path;
      qHead.m5.path.push(start);
      queue.push(qHead.m5);
    }
    if (this.#checkMove(m6)) {
      qHead.m6 = KnightNode(m6);
      qHead.m6.path = qHead.path;
      qHead.m6.path.push(start);
      queue.push(qHead.m6);
    }
    if (this.#checkMove(m7)) {
      qHead.m7 = KnightNode(m7);
      qHead.m7.path = qHead.path;
      qHead.m7.path.push(start);
      queue.push(qHead.m7);
    }
    if (this.#checkMove(m8)) {
      qHead.m8 = KnightNode(m8);
      qHead.m8.path = qHead.path;
      qHead.m8.path.push(start);
      queue.push(qHead.m8);
    }
    // if queue has values, recursively call
    if (queue.length > 0) this.buildMoves(finish, queue);
  }
}

// knightMoves function that gives shortest path btw two squares
// return error for impossible moves (outside board)
function knightMoves(start, finish) {
  // set up class
  let knight = new Gameboard(start);
  let ret = knight.buildMoves2(finish);
  console.log(ret);

}

knightMoves([4, 4], [0, 1]);


