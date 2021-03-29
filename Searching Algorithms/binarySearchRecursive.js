function binarySearch(array, searchKey, start = 0, end = array.length - 1) {
  if (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] == searchKey) {
      return "Found";
    } else if (array[mid] > searchKey) {
      return binarySearch(array, searchKey, start, mid - 1);
    } else if (array[mid] < searchKey) {
      return binarySearch(array, searchKey, mid + 1, end);
    }
  }
  return "Not Found";
}
