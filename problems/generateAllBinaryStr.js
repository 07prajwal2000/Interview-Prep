function generateBinaryStrings(n) {
  let ans = [];

  function gen(str) {
    let len = str.length;
    if (len == n) {
      ans.push(str);
      return;
    }
    if (str[len - 1] == '1') {
      gen(str + '0');
      return;
    }
    gen(str + '1');
    gen(str + '0');
  }
  gen('');
  return ans.reverse();
}

console.log(generateBinaryStrings(5));
