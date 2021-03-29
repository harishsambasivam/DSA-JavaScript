class Graph {
  constructor() {
    this.nodeCount = 0;
    this.adjacenyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacenyList[vertex]) {
      this.adjacenyList[vertex] = [];
      this.nodeCount++;
    }
  }

  addEdge(vertex1, vertex2) {
    if (
      this.adjacenyList[vertex1] != undefined &&
      this.adjacenyList[vertex2] != undefined
    ) {
      this.adjacenyList[vertex1].push(vertex2);
      this.adjacenyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (
      this.adjacenyList[vertex1] != undefined &&
      this.adjacenyList[vertex2] != undefined
    ) {
      this.adjacenyList[vertex1].splice(
        this.adjacenyList[vertex1].indexOf(vertex2),
        1
      );
      this.adjacenyList[vertex2].splice(
        this.adjacenyList[vertex2].indexOf(vertex1),
        1
      );
    }
  }

  dfs(startVertex) {
    if (this.adjacenyList[startVertex] == undefined)
      throw new Error("Vertex not found");
    let visited = [];
    let queue = [];
    this.adjacenyList[startVertex].forEach((vertex) => {
      queue.push(vertex);
    });
    while (queue.length > 0) {
      let currentVertex = queue.shift();
      visited.push(currentVertex);
      this.adjacenyList[currentVertex].forEach((vertex) => {
        if (!visited.includes(vertex)) {
          queue.push(vertex);
        }
      });
    }
    return visited;
  }

  bfs(startVertex) {
    if (this.adjacenyList[startVertex] == undefined)
      throw new Error("Vertex not found");
    let visited = [];
    this.adjacenyList[startVertex].forEach();
  }
}

let graph = new Graph();
graph.addVertex("abinaya");
graph.addVertex("harish");
graph.addVertex("prashanth");
graph.addVertex("mani");
graph.addVertex("bala");
graph.addVertex("abikash");
graph.addVertex("sai");
graph.addVertex("vijaya");
graph.addVertex("naveen");
graph.addVertex("jayakumar");
graph.addVertex("varatharajan");
graph.addVertex("ezhil");
graph.addVertex("jai sri");
graph.addVertex("ezhil");

graph.addEdge("abinaya", "harish");
graph.addEdge("abinaya", "mani");
graph.addEdge("prashanth", "mani");
graph.addEdge("bala", "harish");
graph.addEdge("abikash", "abinaya");
graph.addEdge("abikash", "naveen");
graph.addEdge("naveen", "harish");
graph.addEdge("harish", "sai");
graph.addEdge("bala", "jayakumar");
graph.addEdge("sai", "varatharajan");
graph.addEdge("abi", "vijaya");
graph.addEdge("mani", "ezhil");
graph.addEdge("prashanth", "jai sri");
