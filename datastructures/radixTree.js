/* notes
key search in list - sorted list of str
while insert
  - bin search the list of nodes, if prefix key found, if the key is full match, 
    - split the str till where it matches
    - move the remaining part of key to child node, 
    - repeat the same process above (prefix check, split and all that)
  - if prefix not found
    - insert at the end
    - find best position to place
    - move rest of the keys to right
*/

// sorted str list impl (no dups allowed)
class SortedStringList {
  internalList = [];

  insert(str, meta) {
    this._insert(str, meta, this.internalList);
  }

  _insert(str, meta, list) {
    if (list.length == 0) {
      list.push({ key: str, meta, child: [] });
      return;
    }
    let left = 0, right = list.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      const val = list[mid];
      const prefixIndex = this.findPrefixIndex(val.key, str);
      if (prefixIndex == 0) { // no match
        // find where to move the pointer
        let valAscii = this.getCode(val.key[0]);
        let strAscii = this.getCode(str[0]);
        if (valAscii > strAscii) right = mid - 1;
        else left = mid + 1;
      } else if (prefixIndex < Math.min(str.length, val.key.length)) { // partial match
        // here need to split the string into 2 parts. 
        const leftPart = val.key.substring(0, prefixIndex);
        const rightPart = val.key.substring(prefixIndex);
        // left stays there, right part goes to child including meta and childs
        const temp = list[mid]; // TODO
        const remaining = str.substring(prefixIndex);
        temp.child.push({key: rightPart ?? remaining, meta: temp.meta, child: []});
        let child = temp.child.sort((a, b) => a.key > b.key ? 1 : -1); // TODO: Not optimised
        list[mid] = {
          key: leftPart,
          meta: undefined,
          child
        };
        if (rightPart) this._insert(remaining, meta, child);
        return;
        // the val's remaining part goes to child, and recursive insertion will happen
      } else { // exact match
        // update the meta
        if (str == val.key) val.meta = meta;
        else this._insert(str.substring(prefixIndex), meta, val.child);
        return;
      }
    }
    // find insertion position
    const insertionPoint = this.findCollisionPosition(str, list);
    this.shiftToRight(insertionPoint, false, list);
    list[insertionPoint] = { key: str, meta, child: [] };
  }

  shiftToRight(fromIndex, isLastIndexEmpty, list) {
    if (!isLastIndexEmpty) list.push('');
    for (let i = list.length - 2; i >= fromIndex; i--) {
      list[i + 1] = list[i];
    }
  }

  findCollisionPosition(str, list) {
    let left = 0, right = list.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      const val = list[mid].key;
      let index = 0;
      const len = Math.min(str.length, val.length);
      while (index < len) {
        const strCode = this.getCode(str[index]);
        const valCode = this.getCode(val[index]);
        if (valCode == str) {
          index++;
          continue;
        } else if (valCode > strCode) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
        break;
      }
    }
    return left;
  }

  getCode(char) {
    return char.charCodeAt(0);
  }

  findPrefixIndex(str1, str2) {
    let i = 0;
    while (i < str1.length && i < str2.length) {
      if (str1[i] !== str2[i]) return i;
      i++;
    }
    return i;
  }
}

const tree = new SortedStringList();
tree.insert("abc", "abc");
tree.insert("abd", "abd");
tree.insert("abcat", "cat");