function findMaxConnectedComponentSize(graph) {
  let visited = new Set();
  let maxComponentSize = 0;
  for (let node of graph.keys()) {
    if (!visited.has(node)) {
      let componentSize = dfs(graph, node, visited);
      if (componentSize > maxComponentSize) {
        maxComponentSize = componentSize;
      }
    }
  }
  return maxComponentSize;
}

function dfs(graph, node, visited) {
  visited.add(node);
  let componentSize = 1;
  for (let neighbor of graph.get(node)) {
    if (!visited.has(neighbor)) {
      componentSize += dfs(graph, neighbor, visited);
    }
  }
  return componentSize;
}
