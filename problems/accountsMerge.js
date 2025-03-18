/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
	const accountsMap = {};
	for (let i = 0; i < accounts.length; i++) {
		const account = accounts[i];
		for (let j = 1; j < account.length; j++) {
			const email = account[j];
			if (email in accountsMap) {
				accountsMap[email].push(i);
			} else {
				accountsMap[email] = [i];
			}
		}
	}
	const usersMap = {};
	const visited = Array(accounts.length).fill(false);

	function dfs(i, set) {
		if (visited[i]) return;
		visited[i] = true;
		for (let j = 1; j < accounts[i].length; j++) {
      const email = accounts[i][j];
			set.add(email);
      for (let nei of accountsMap[email]) {
        dfs(nei, set);
      }
		}
	}

	const ans = [];
	for (let i = 0; i < accounts.length; i++) {
    if (visited[i]) continue;
    const name = accounts[i][0], set = new Set();
    dfs(i, set);
    ans.push([name, ...[...set].sort()]);
	}
	return ans;
};

console.log(
	accountsMerge([
		["John", "johnsmith@mail.com", "john_newyork@mail.com"],
		["John", "johnsmith@mail.com", "john00@mail.com"],
		["Mary", "mary@mail.com"],
		["John", "johnnybravo@mail.com"],
	])
);
