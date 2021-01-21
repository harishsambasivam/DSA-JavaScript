function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function pivot(array, startIndex = 0, endIndex = array.length - 1) {
  if (array.length === 1) return;
  let pivot = array[startIndex];
  let pivotIndex = startIndex;
  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (array[i] < pivot) {
      pivotIndex++;
      swap(array, i, pivotIndex);
    }
  }

  if (startIndex != pivotIndex) swap(array, startIndex, pivotIndex);
  return pivotIndex;
}

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    // left
    quickSort(array, left, pivotIndex - 1);
    // right
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

module.exports = { quickSort, pivot, swap };
