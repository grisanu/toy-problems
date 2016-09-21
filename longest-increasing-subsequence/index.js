/**
* Should take array and return the length of the longest increasing subsequence
*/
const longestIncreasingSubsequence = arr => {
  // tmp array that contains longest increasing subsequence up until that index
  const longestSoFar = arr.reduce((acc) => {
    acc.push(1);
    return acc;
  }, []);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (longestSoFar[j] < longestSoFar[i]) {
        longestSoFar[i] = Math.max(longestSoFar[i], longestSoFar[j] + 1);
      }
    }
  }

  return Math.max(...longestSoFar);
};

