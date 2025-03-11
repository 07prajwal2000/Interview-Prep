function wordAbbreviation(word, abbr) {
  const wordLenght = word.length, abbrLength = abbr.length;
  let wordIdx = 0, abbrIdx = 0;

  while (wordIdx < wordLenght && abbrIdx < abbrLength) {
    let leftIdx = abbrIdx;
    while (abbrIdx < abbrLength && isDigit(abbr[abbrIdx])) {
      abbrIdx++;
    }
    let len = 0;
    if (leftIdx != abbrIdx) {
      len = parseInt(abbr.substring(leftIdx, abbrIdx));
    }
    wordIdx += len;
    if (wordIdx >= wordIdx || word[wordIdx] != abbr[abbrIdx]) return false;
    wordIdx++;
    abbrIdx++;
  }
  return wordIdx >= wordLenght && abbrIdx >= abbrLength;
}

function isDigit(c) {
  const code = c.charCodeAt(0);
  return code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0);
}

console.log(wordAbbreviation('abbrrr', 'a3'));