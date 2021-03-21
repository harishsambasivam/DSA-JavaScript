/*
    @input int[] array
    @returns int[] sortedArray 
*/

function countingSort(array) {
  if (array.length === 0 || array.length === 1) return array;

  // creating a map to store counts.
  let map = new Map();

  // new array to avoid mutating input
  let results = [];

  // store the count of every element in map
  array.forEach((element) => {
    if (map[element]) map[element]++;
    else map[element] = 1;
  });

  // pushing the elements to result array based on counts stored from map.
  Object.keys(map).forEach((key) => {
    for (let i = 0; i < map[key]; i++) {
      results.push(Number(key));
    }
  });

  return results;
}

_ = countingSort([1, 9, 7, 8, 8, 5, 4, 3, 2, 1]);
_;

module.exports = { countingSort };
