/** Merge overlapping arrays
* Take 2D array => [[6, 9], [14, 15 ],[7, 10]]
* Return merged => [[6,10],[14,15]]
*
**/

// Logic:
/*
1) Sort by first element in tuple (nlogn)
2) Try to merge each tuple (n)
  for i (0 to n)
    for j (i to n)
     if cannot merge => break j loop
*/
