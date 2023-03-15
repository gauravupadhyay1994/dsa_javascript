function findOrder(n, prereqs) {
  const visited = new Array(n).fill(false);
  const stack = [];
  const ans = [];
  const adjList = new Array(n).fill(null).map(() => []);

  for (const [a, b] of prereqs) {
    adjList[b].push(a);
  }

  function dfs(node) {
    if (visited[node] === true) {
      if (stack.includes(node)) {
        return false; // cycle detected, return false
      }
      return true;
    }

    visited[node] = true;
    stack.push(node);

    for (const neighbor of adjList[node]) {
      const res = dfs(neighbor);
      if (res === false) {
        return false; // cycle detected, return false
      }
    }

    ans.push(stack.pop()); // backtrack
    return true;
  }

  for (let i = 0; i < n; i++) {
    const res = dfs(i);
    if (res === false) {
      return []; // cycle detected, return empty array
    }
  }

  return ans.reverse(); // reverse to get the correct order
}

console.log(
  findOrder(2, [
    [0, 1],
    [1, 0],
  ])
);
