// https://leetcode.com/problems/text-justification/solutions/6837932/beats-100-javascript-code-with-comments-rp9bv/
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const ans = [], n = words.length;
  // to get total characters at the current index of words list
  const wordsCountMap = {};
  let i = 0;
  while (i < n) {
    const w = []; // temp words list
    let len = 0; // to calculate total chars added to temp list
    let charLength = 0;
    while (i < n) {
      const word = words[i];
      len += word.length; // add the chars length before to check if it exceeds
      if (len > maxWidth) break; // if exceeds exit from loop
      len++;
      w.push(word);
      i++;
      // counting total chars for future reference
      charLength += word.length;
    }
    wordsCountMap[ans.length] = charLength;
    ans.push(w);
  }
  const res = [];
  for (let j = 0; j < ans.length - 1; j++) {
    const list = ans[j]; // list of words in jth line
    // total chars in current line excluding space
    const charsLength = wordsCountMap[j];
    // total available space to insert
    let availableSpace = maxWidth - charsLength;
    // total position to insert space
    let m = list.length - 1 == 0 ? 1 : list.length - 1;
    // final sentence
    let sentence = '';
    for (let k = 0; k < list.length; k++) {
      const word = list[k];
      sentence += word;
      // total space required after inserting the word
      let spaceRequired = Math.ceil(availableSpace / m);
      for (let l = 0; l < spaceRequired; l++) sentence += ' ';
      // decrement the available space as we inserted the space to sentence
      availableSpace -= spaceRequired;
      // decrement the total words that are pending to be inserted
      m--;
      // if goes < 0, will reset back to 1
      m = m == 0 ? 1 : m;
    }
    res.push(sentence);
  }
  // no complicated calculations for the last line. simple join with space
  let sentence = ans[ans.length - 1].join(' ');
  // insert the remaining spaces to sentence
  for (let i = sentence.length; i < maxWidth; i++) {
    sentence += ' ';
  }
  res.push(sentence);
  return res;
};