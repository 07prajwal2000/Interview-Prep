/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const s = [], n = path.length;
  for (let i = 0; i < n; i++) {
    if (path[i] == '/') continue;
    let dots = 0;
    let start = i;
    while (i < n && path[i] == '.') {
      i++;
      dots++;
    }
    if (dots == 2 && (path[i] == '/' || i == n)) s.pop();
    else if (dots == 1 && (path[i] == '/' || i == n)) continue;
    else {
      while (i < n && path[i] != '/') i++;
      s.push(path.substring(start, i));
    }
  }
  return '/' + s.join('/');
};