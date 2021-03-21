function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {
  let lastSortedIndex = array.length - 1;
  let swapped;
  do {
    swapped = false;
    let leftIndex = 0;
    for (let rightIndex = 1; rightIndex <= lastSortedIndex; rightIndex++) {
      let leftElement = array[leftIndex];
      let rightElement = array[rightIndex];
      if (leftElement > rightElement) {
        swap(leftIndex, rightIndex, array);
        swapped = true;
      }
      leftIndex++;
    }
    lastSortedIndex--;
  } while (swapped);
  return array;
}

module.exports = { bubbleSort, swap };
