function isSorted(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    // Find the smallest number  in the list
    let min = i;
  
    // Compare current number with right next number
    for (let j = i+1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    // Swap the numbers
    if (min != i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  
  return arr;
}