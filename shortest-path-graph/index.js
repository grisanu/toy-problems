

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

//   return depth;
// }