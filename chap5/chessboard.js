function chessBoard(size) {
  let row = '';
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if ((i + j) % 2 == 0) row += '#';
      else row += ' ';
    }
    row += '\n';
  }
  return row;
}

// console.log(chessBoard(8));
