// Merge sort

const mergeSort = array => {
  if (array.length > 1) {
    const mid = Math.floor(array.length/2);
    const arr1 = array.slice(0, mid);
    const arr2 = array.slice(mid, array.length);

    return merge(mergeSort(arr1), mergeSort(arr2));
  }

  return array;
};

const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;

  const sorted = [];

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      sorted.push(arr1[i]);
      sorted.push(arr2[j]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      sorted.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      sorted.push(arr2[j]);
      j++;
    } else { // out of bounds
      if (arr1[i] === undefined) {
        sorted.push(arr2[j]);
        j++;
      } else {
        sorted.push(arr1[i]);
        i++;
      }
    }
  }

  return sorted;
};

// console.log(mergeSort([9,8,7,6,5,4,3,1]));
// console.log(mergeSort([5,8,2,0,7,23,2,7,235,8,4,5,8,25,4678,1,7,78,5,2568,92,0,25,-235]));
