// node factory with attribute for data stored and next possible moves
function Knight(position) {
  return {
    position,
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
  constructor(start, finish) {
    this.root = this.buildMoves(start, finish);
  }

  // check if win
  #checkWin(start, finish) {
    if (start[0] === finish[0] && start[1] === finish[1]) return true;
    return false;
  }

  // check if square already visited
  #checkPath(start, path) {

  }

  buildMoves(start, finish, path = start) {
    // create new knight
    let knight = Knight(start);
    // return path if finish reached
    if (this.#checkWin(start, finish)) return path;
    // 
  }
}

// knightMoves function that gives shortest path btw two squares
// return error for impossible moves (outside board)