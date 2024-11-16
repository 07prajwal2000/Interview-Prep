// https://www.geeksforgeeks.org/problems/recursively-remove-all-adjacent-duplicates0744/1
function rremove(s) {
	let n = s.length;
	if (n == 0) {
		return "";
	}
  let removed = "";
	for (let i = 0; i < n; i++) {
    let repeated = false;
    while (i + 1 < n && s[i] == s[i + 1]) {
			i++;
      repeated = true;
		}
		if (!repeated) {
      removed += s[i];
    }
	}
  if (removed.length == n) return removed;
  return rremove(removed);
}

console.log(rremove("geeksforgeek"));
