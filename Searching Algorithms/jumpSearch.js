function jumpSearch(array, key) {
  let jumpSize = Math.floor(Math.sqrt(array.length));
  for (var i = 0; i < array.length; i += jumpSize) {
    if (array[i] == key) {
      return "Found";
    } else if (array[i] > key) {
      break;
    }
  }
  if (i - jumpSize != array.length - 1) {
    for (var j = i - jumpSize; j < i; j++) {
      if (array[j] == key) return "Found";
    }
  }

  return "Not Found";
}
