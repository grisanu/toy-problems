'use strict';

const shortestPathInGraph = (graph, a, b) => {
  let firstQ = [graph.nodes[a]];
  let secondQ = [];
  let depth = 0;

  while (firstQ.length > 0) {
    firstQ.forEach(node => {
      // mark as visited
      node.visited = true;

      // found
      if (node.value === b) {
        return depth;
      }

      // add each connected node to secondQ
      for (let newNode = 0; newNode < node.edges.length; newNode++) {
        if (!graph.nodes[node.edges[newNode]].visited) {
          secondQ.push(graph.nodes[node.edges[newNode]]);
          graph.nodes[node.edges[newNode]].visited = true;
        }
      }
    });

    firstQ = secondQ;
    secondQ = [];
    depth++;
  }
};

// const shortPath = (graph, a, b) => {
//   let firstQ = [graph.nodes[a]];
//   let secondQ = [];
//   let depth = 0;



//   while(firstQ.length > 0) {
//     for(let i = 0; i < firstQ.length; i++) {
//       let next = firstQ[i]
//       next.visited = true;
//       if(next.value === b) {
//         return depth;
//       }
//       for(let key in next.edges) {
//         if(!graph.nodes[key].visited) {
//           secondQ.push(graph.nodes[key])
//           graph.nodes[key].visited = true;
//         }
//       }
//     }

//     firstQ = secondQ;
//     secondQ = [];
//     depth++
//   }

// }