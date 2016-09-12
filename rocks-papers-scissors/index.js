// Return all possible plays in n rounds as arrays
// ie. n = 3 => [ 'rrr', 'ppp', 'sss', 'rps', ...];
const rps = (n) => {
  const moves = ['r', 'p', 's'];

  if (n === 1) {
    return moves;
  }

  const subPlay = rps(n-1);
  return moves.reduce((acc, curr) => {
    return acc.concat(subPlay.reduce((acc1, curr1) => {
      return acc1.concat(curr.concat(curr1));
    }, []));
  }, []);
};