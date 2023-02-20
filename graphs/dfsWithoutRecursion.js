// dfs uses stack, while bfs uses queue
// stack is last in first out, whereas queue is first in first out

function dfs(root) {
  let stack = [root];
  while (stack.length > 0) {
    let node = stack.pop();
    console.log(node.value);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
}
