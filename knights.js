// node factory with attribute for data stored and next possible moves
function KnightNode(position) {
  return {
    position,
    path: null,
    m1: null,
    m2: null,
    m3: null,
    m4: null,
    m5: null,
    m6: null,
    m7: null,
    m8: null,
  };
}

// gameboard class that builds tree of possible moves
class Gameboard {
  constructor(start) {
    this.root = this.#buildKnight(start);
  }

  #buildKnight(start) {
    const knight = KnightNode(start);
    return knight;
  }

  // check if win
  #checkWin(start, finish) {
    if (start[0] === finish[0] && start[1] === finish[1]) {
      console.log('winner');
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

  buildMoves(finish, queue = [this.root]) {
    // pull the first value from queue
    const qHead = queue.shift();
    // create new knight node from queue value
    const start = qHead.position;
    // return if finish reached
    if (this.#checkWin(start, finish)) return;
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
      queue.push(qHead.m1);
    }
    if (this.#checkMove(m2)) {
      qHead.m2 = KnightNode(m2);
      queue.push(qHead.m2);
    }
    if (this.#checkMove(m3)) {
      qHead.m3 = KnightNode(m3);
      queue.push(qHead.m3);
    }
    if (this.#checkMove(m4)) {
      qHead.m4 = KnightNode(m4);
      queue.push(qHead.m4);
    }
    if (this.#checkMove(m5)) {
      qHead.m5 = KnightNode(m5);
      queue.push(qHead.m5);
    }
    if (this.#checkMove(m6)) {
      qHead.m6 = KnightNode(m6);
      queue.push(qHead.m6);
    }
    if (this.#checkMove(m7)) {
      qHead.m7 = KnightNode(m7);
      queue.push(qHead.m7);
    }
    if (this.#checkMove(m8)) {
      qHead.m8 = KnightNode(m8);
      queue.push(qHead.m8);
    }
    // if queue has values, recursively call
    if (queue.length > 0) this.buildMoves(finish, queue);
  }

  winDepth(finish, root = this.root, path = []) {
    // reject empty
    if (finish === null || root === null) return [];
    // look through 
    
  }

}

// knightMoves function that gives shortest path btw two squares
// return error for impossible moves (outside board)
let knight = new Gameboard([4,4]);
knight.buildMoves([5,7]);

