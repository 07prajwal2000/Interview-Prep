function leaders(a) {
  let ans = [], max = -Infinity;
  for (let i = a.length - 1; i >= 0; i--) {
    const cur = a[i];
    if (cur >= max) {
      max = cur;
      ans.push(cur);
    }
  }
  return ans.reverse();
}

console.log(leaders([16, 17, 4, 3, 5, 2]));