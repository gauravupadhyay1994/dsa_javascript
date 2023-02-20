function hasPathDFS(graph, src, des) {
  if (src === des) return true;
  for (const neighbor of graph[src]) {
    if (hasPath(graph, neighbor, des)) return true;
  }
  return false;
}

function hasPathBFS(graph, src, des) {
  const queue = [src];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === des) return true;
    for (const neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
}
