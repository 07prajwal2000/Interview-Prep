/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const ans = [], n = words.length;
  const wordsCountMap = {};
  let i = 0;
  while (i < n) {
    let len = 0;
    const w = [];
    let charLength = 0;
    while (i < n) {
      const word = words[i];
      len += word.length;
      if (len > maxWidth) break;
      len++;
      w.push(word);
      i++;
      charLength += word.length;
    }
    wordsCountMap[ans.length] = charLength;
    ans.push(w);
  }
  const res = [];
  for (let j = 0; j < ans.length - 1; j++) {
    const list = ans[j];
    const charsLength = wordsCountMap[j];
    let availableSpace = maxWidth - charsLength;
    let m = list.length - 1 == 0 ? 1 : list.length - 1;

    let sentence = '';
    for (let k = 0; k < list.length; k++) {
      const word = list[k];
      sentence += word;
      let spaceRequired = Math.ceil(availableSpace / m);
      for (let l = 0; l < spaceRequired; l++) sentence += ' ';
      availableSpace -= spaceRequired;
      m--;
      m = m == 0 ? 1 : m;
    }
    res.push(sentence);
  }
  let sentence = ans[ans.length - 1].join(' ');
  for (let i = sentence.length; i < maxWidth; i++) {
    sentence += ' ';
  }
  res.push(sentence);
  return res;
};