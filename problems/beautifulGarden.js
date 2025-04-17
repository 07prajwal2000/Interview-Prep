const rl = require("readline").createInterface(process.stdin, process.stdout);
let i = 0;
let inp1 = "";
let inp2 = "";
rl.on("line", (input) => {
	i++;
	if (i == 1) return;
	if (!inp1) inp1 = input;
	else inp2 = input;
	if (!inp2) return;

	const [n, k, d] = inp1.split(" ").map((x) => parseInt(x));
	const flowers = inp2
		.split(" ")
		.map((x) => parseInt(x))
		.sort((a, b) => a - b);
	const garden = Array(n).fill(0);
	let plucks = 0;
	if (n == k) {
		console.log(0);
		inp1 = "";
		inp2 = "";
		return;
	}
	for (let i = 0; i < d; i++) {
		let plucked = 0,
			ready = 0;
		for (let j = 0; j < n; j++) {
			if (garden[j] <= i) ready++;
		}
		let canPluck = ready - k;
		for (let j = 0; j < n && canPluck > 0; j++) {
			if (garden[j] > i) continue;
			plucked++;
			garden[j] += flowers[j];
			canPluck--;
		}
		plucks += plucked;
	}
	console.log(plucks);

	inp1 = "";
	inp2 = "";
});
