function binarySearchIterative(array, searchKey) {
  array.sort((a, b) => a - b);
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    counter = counter + 1;
    let mid = Math.floor((start + end) / 2);
    if (array[mid] == searchKey) {
      return "Found";
    } else if (searchKey < array[mid]) {
      end = mid - 1;
    } else if (searchKey > array[mid]) {
      start = mid + 1;
    }
  }
  return "Not Found";
}

binarySearchIterative(
  new Array(1000000).fill().map((_, i) => i),
  999999
);
