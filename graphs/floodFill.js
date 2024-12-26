var floodFill = function (image, sr, sc, color) {
  const q = [[sr, sc]], n = image.length, m = image[0].length;
  let initialPx = image[sr][sc];
  while (q.length) {
    const tlength = q.length;
    let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    for (let i = 0; i < tlength; i++) {
      const coords = q.shift();
      image[coords[0]][coords[1]] = color;
      for (let dir of directions) {
        let x = coords[0] + dir[0];
        let y = coords[1] + dir[1];
        if (x == n || x < 0 || y == m || y < 0 || image[x][y] != initialPx || image[x][y] == color) continue;
        image[x][y] = color;
        q.push([x, y]);
      }
    }
  }
  return image;
};