function findConnectedComponents(graph) {
  let visited = new Set();
  let components = [];
  for (let node of graph.keys()) {
    if (!visited.has(node)) {
      let component = [];
      dfs(graph, node, visited, component);
      components.push(component);
    }
  }
  return components;
}

function dfs(graph, node, visited, component) {
  visited.add(node);
  component.push(node);
  for (let neighbor of graph.get(node)) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited, component);
    }
  }
}
