/** Queue Reconstruction by Height
 *
 * Suppose you have a random list of people standing in a queue.
 * Each person is described by a pair of integers (h, k),
 * where h is the height of the person and k is the number of people
 * in front of this person who have a height greater than or equal to h.
 *
 * Write an algorithm to reconstruct the queue.
 *
 * Note:
 * The number of people is less than 1,100.
 *
 * Example
 *
 * Input:
 * [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
 *
 * Output:
 * [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
**/

/** Solution logic
Suppose I take only the tallest persons, all having the same maximum height.
Their second values must be 0, 1, 2, 3... with no gaps at all,
because they only count each other. Therefore, if there were no other persons at all,
their second value must be their final index. What about the persons with
second maximum height then? Suppose there are only tallest persons and
just one more person who has slightly smaller height. What would be his position?
Well, since he obviously only count tallest persons,
his position would still be his second value.
The next person of the same height counts only the previous person
and all the tallest ones, but since they are all already in the queue,
his second value would also be his index.

Then I realized that I could go on forever like that because
each time I put a person in the queue and go to the next person,
all persons counted by the next one are already there,
so I instantly know the right index and I know that the person
I put in the queue doesn't really care about where I put
all subsequent persons because they are outside of his selection criteria.
**/

const queueReconstruction = queue => {
  const results = [];
  // sort by height
  queue = queue.sort((a, b) => {
    return a[0]-b[0];
  });
  // then sort by people in front
  let tmp1 = [];
  let tmp2 = [];
  let curr = queue[queue.length - 1][0];

  while (queue.length > 0) {
    let person = queue.pop();

    if (curr !== person[0]) {
      curr = person[0];
      tmp1.sort((a, b) => {
        return a[1]-b[1];
      });
      tmp2 = tmp2.concat(tmp1);
      tmp1 = [];
    }

    tmp1.push(person);

    if (queue.length === 0) {
      tmp1.sort((a, b) => {
        return a[1]-b[1];
      });
      tmp2 = tmp2.concat(tmp1);
    }
  }

  // splice by index
  queue = tmp2.reverse();
  while (queue.length > 0) {
    const person = queue.pop();
    results.splice(person[1], 0, person);
  }
  return results;

};

console.log(queueReconstruction([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]));
