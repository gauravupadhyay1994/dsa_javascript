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

bfs("K");
