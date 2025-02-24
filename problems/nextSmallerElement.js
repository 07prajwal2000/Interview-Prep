function nextSmallerElements(nums){
  let s = [], ans = Array(nums.length);
  let i = 0;
  for (let num of nums) {
      while (s.length && num <= s[s.length - 1]) {
          s.pop();
      }
      ans[i] = s.length ? s[s.length - 1] : -1;
      i++;
      s.push(num);
  }
  return ans;
}