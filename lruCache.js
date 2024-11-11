function DLNode(value, key, left, right) {
	this.value = value;
	this.key = key;
	this.left = left ? left : null;
	this.right = right ? right : null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
	this.cap = capacity;
	this.map = new Map();
	this.left = new DLNode(0);
	this.right = new DLNode(0);

	this.left.right = this.right;
	this.right.left = this.left;

	this.insertStart = function (node) {
		const r = this.left.right;
		this.left.right = node;
		node.left = this.left;
		node.right = r;
		r.left = node;
	};
	this.insertEnd = function (node) {
		const l = this.right.left;
		node.right = this.right;
		this.right.left = node;
		node.left = l;
		l.right = node;
	};
	this.removeAt = function (node) {
		let l = node.left;
		let r = node.right;
		l.right = r;
		r.left = l;
		return node;
	};
};
/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
	const node = this.map.get(key);
	if (!node) return -1;
	this.removeAt(node);
	this.insertStart(node);
	return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
	if (this.map.has(key)) {
		this.removeAt(this.map.get(key));
	}
	const node = new DLNode(value, key);
	this.insertStart(node);
	this.map.set(key, node);
	if (this.map.size > this.cap) {
		const removed = this.removeAt(this.right.left);
		this.map.delete(removed.key);
	}
};

const cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));
cache.put(3, 3);
console.log(cache.get(2));
cache.put(4, 4);
console.log(cache.get(1));
console.log(cache.get(3));
console.log(cache.get(4));
