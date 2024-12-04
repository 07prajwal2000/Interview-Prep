/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0, m = grid.length, n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] != "1") continue;
            markDone(grid, i, j);
            count++;
        }
    }
    return count;
};

function markDone(grid, i, j) {
    if (i < 0 || i >= grid.length) return;
    if (j < 0 || j >= grid[0].length) return;
    if (grid[i][j] !== "1") return;
    grid[i][j] = "#";
    markDone(grid, i, j + 1);
    markDone(grid, i, j - 1);
    markDone(grid, i + 1, j);
    markDone(grid, i - 1, j);
}

console.log(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]));