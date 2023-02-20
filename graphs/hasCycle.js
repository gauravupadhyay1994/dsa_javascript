function hasCycle(graph) {
  let visited = new Set();
  for (let node of graph.keys()) {
    if (!visited.has(node)) {
      if (dfsHasCycle(graph, node, null, visited)) {
        return true;
      }
    }
  }
  return false;
}

function dfsHasCycle(graph, node, parent, visited) {
  visited.add(node);
  for (let neighbor of graph.get(node)) {
    if (!visited.has(neighbor)) {
      if (dfsHasCycle(graph, neighbor, node, visited)) {
        return true;
      }
    } else if (neighbor !== parent) {
      return true;
    }
  }
  return false;
}
