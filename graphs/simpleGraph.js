// the big O complexity of both of them is O(V+E) where V is the vertices and E is the edge

const airports = "A B C D E F G H I J K".split(" ");
const routes = [
  ["A", "C"],
  ["A", "K"],
  ["B", "J"],
  ["C", "K"],
  ["F", "K"],
  ["C", "F"],
  ["D", "E"],
];

// the graph
const adjacencyList = new Map();

function addNode(airport) {
  adjacencyList.set(airport, []);
}

// add edge
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

function bfs(start) {
  const visited = new Set();
  const queue = [start];

  while (queue.length > 0) {
    const airport = queue.shift();
    const destinations = adjacencyList.get(airport);
    for (const destination of destinations) {
      if (destination === "J") {
        console.log("C has a path");
      }
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
      }
    }
  }
}

function dfs(start, visited = new Set()) {
  visited.add(start);
  const destinations = adjacencyList.get(start);
  for (const destination of destinations) {
    if (destination === "C") {
      console.log("found");
      return;
    }
    if (!visited.has(destination)) {
      dfs(destination, visited);
    }
  }
}

// bfs("K");
// dfs("J");
