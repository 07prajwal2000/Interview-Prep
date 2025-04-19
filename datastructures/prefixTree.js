class PrefixTrie {
  _maxLen = 256;
  _hash = Array(this._maxLen);
  charCount = 0;
  endCount = 0;

  existChar(char) {
    const index = this._getIndex(char);
    return !!this._hash[index];
  }

  insert(str) {
    let dummyNode = this;

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      dummyNode.charCount++;
      if (dummyNode.existChar(char)) {
        dummyNode = dummyNode.getNode(char);
        continue;
      }

      const index = dummyNode._getIndex(char);
      dummyNode._hash[index] = new PrefixTrie();
      dummyNode = dummyNode._hash[index];
    }
    
    dummyNode.endCount++;
  }

  delete(str) {
    if (!this.exist(str)) return;
    let dummyNode = this;
    for (let char of str) {
      const node = dummyNode.getNode(char);
      if (!node) return;
      if (--node.charCount == 0) dummyNode.removeFromHash(this._getIndex(char));
      dummyNode = node;
    }
    if (dummyNode && dummyNode.endCount > 0) dummyNode.endCount--;
  }

  removeFromHash(index) {
    if (index >= this._maxLen || index < 0) return;
    this._hash[index] = undefined;
  }

  exist(str) {
    let dummyNode = this;
    for (let char of str) {
      if (!dummyNode.existChar(char)) return false;
      dummyNode = dummyNode.getNode(char);
    }
    return dummyNode != null && dummyNode.isEndNode();
  }

  getNode(char) {
    return this._hash[this._getIndex(char)];
  }

  isEndNode() {
    return this.endCount > 0;
  }

  _getIndex(char) {
    return char.charCodeAt(0);
  }
}

const trie = new PrefixTrie();
trie.insert("prajwal");
trie.insert("prajm");
trie.delete("prajwal");
console.log(trie.exist("prajwal"));
console.log(trie.exist("prajm"));