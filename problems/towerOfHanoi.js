function towerOfHanoi(n) {
  const moves = [];

  function tower(num, a, b, c) {
    if (num == 1) {
      moves.push([a, 'to', c]);
      return;
    }
    tower(num - 1, a, c, b);
    moves.push([a, 'to', c]);
    tower(num - 1, b, a, c);
  }
  tower(n, 'A', 'B', 'C')
  return moves;
}

console.log(towerOfHanoi(4));