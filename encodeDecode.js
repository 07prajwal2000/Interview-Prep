class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let result = "";
    for (let str of strs) {
      result += str.length + "$" + str;
    }
    return result;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let prev = 0;
    const ans = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "$") {
        const len = parseInt(str.slice(prev, i));
        const s = str.slice(i + 1, i + 1 + len);
        ans.push(s);
        i += len;
        prev = i + 1;
      }
    }
    return ans;
  }
}
const s = new Solution();
const enc = s.encode(["neet","code","love","you"]);
console.log("Encoded: ", enc);
const dec = s.decode(enc);
console.log("Decoded: ", dec);