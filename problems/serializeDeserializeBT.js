/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return "";
  const ans = [];

  function dfs(node) {
    if (!node) {
      ans.push("NULL");
      return;
    }
    ans.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return ans.join("$");
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function (data) {
  if (!data) return null;
  const arr = data.split("$");
  let i = 0;
  function build() {
    if (i == arr.length) return null;
    const value = arr[i];
    if (value == "NULL") return null;
    const root = new TreeNode(parseInt(value));
    i++;
    root.left = build();
    i++;
    root.right = build();
    return root;
  }
  return build();
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/