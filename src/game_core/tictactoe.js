"use strict";
class TicTacToe {
  constructor() {
    this.metaboard = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0]]
    }
  getOne() {
    return this.metaboard
  }
  delete() {
    delete this.metaboard
  }
}

var tic = new TicTacToe()

console.log(tic.getOne())
console.log(tic.delete());
console.log(tic.getOne());

//  let blank = Array.from('000000000').map(Number);
  // this.move = function() {
  //   var move = 0;
  //   move = (move === 0 ? 1 : 0)
  //   return move
  // };
  // this.metaboard = {
  //   '_0':function(id) {
  //     let board = blank.slice()
  //     let move = 0
  //     return [board[id], this._2]
  //   },
  //   '_1':blank,
  //   '_2':blank,
  //   '_3':blank,
  //   '_4':blank,
  //   '_5':blank,
  //   '_6':blank,
  //   '_7':blank,
  //   '_8':blank
  // }
