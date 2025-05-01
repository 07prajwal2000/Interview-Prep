class RadixTree {
  internalList = [];

  set(str, meta) {
    this._insert(str, meta, this.internalList);
  }

  get(str) {
    return this._get(str, this.internalList);
  }

  delete(str) {
    return this._delete(str, this.internalList);
  }

  _delete(key, list) {
    let left = 0, right = list.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      const { key: midKey, child } = list[mid];
      if (key == midKey) {
        this.shiftToLeft(mid, list, true);
        return true;
      }
      const prefixIndex = this.findPrefixIndex(key, midKey);
      if (prefixIndex == 0) { // no match
        if (key > midKey) left = mid + 1;
        else right = mid - 1;
      } else {
        const found = this._delete(key.substring(prefixIndex), child);
        if (child.length == 0) list.pop();
        return found;
      }
    }
    return false;
  }

  _get(str, list) {
    if (!str) return null;
    let left = 0, right = list.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      const { key, meta, child } = list[mid];
      const prefixIndex = this.findPrefixIndex(key, str);
      if (key == str) return meta;
      if (prefixIndex == 0) { // no match
        if (key > str) right = mid - 1;
        else left = mid + 1;
      } else {
        return this._get(str.substring(prefixIndex), child);
      }
    }
    return null;
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
        temp.child.push({ key: rightPart ?? remaining, meta: temp.meta, child: [] });
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

  shiftToLeft(fromIndex, list, popEnd) {
    for (let i = fromIndex; i < list.length - 1; i++) {
      list[i] = list[i + 1];
    }
    if (popEnd) list.pop();
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

const tree = new RadixTree();
tree.set("abc", "abc");
tree.set("abd", "abd");
console.log("Deleted key: abc", tree.delete("abc"));
tree.set("abdc", "abdc");
tree.set("abcat", "cat");
tree.set("mike", "mike");
tree.set("rody", "rody");
tree.set("rob", "rob");
tree.set("rope", "rope");
console.log("abc: ", tree.get("abc"));
console.log("abd: ", tree.get("abd"));
console.log("rob: ", tree.get("rob"));