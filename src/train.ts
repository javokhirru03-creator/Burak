function getHighestIndex(arr: number[]): number {
  let max: number = arr[0];
  let index: number = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }

  return index;
}

console.log(getHighestIndex([5, 21, 12, 21, 8]));
