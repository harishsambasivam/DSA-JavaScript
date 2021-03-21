/*
    @input   int number
    @returns  int firstDigit 
*/

function firstDigit(num) {
  if (num == 0) return 0;
  // to find length of number
  length = parseInt(Math.log10(num));
  firstdigit = parseInt(num / Math.pow(10, length));
  return firstdigit;
}

/*
    @input int number,int position
    @returns int numberAtPosition
*/

function getDigit(num, position) {
  // to find length of number
  length = parseInt(Math.log10(num)) + 1;
  if (position > length) return 0;
  // slice the last n(position) digits.
  digit = parseInt(num % Math.pow(10, position));
  return firstDigit(digit);
}

/*
    @input int[] array
    @returns int[] sortedArray 
*/
function radixSort(array) {
  // to find length of max number.
  let maxLength = Math.floor(Math.log10(Math.max(...array)));
  // copying array to avoid mutating input array.
  let result = [...array];
  // to create buckets (0...9)
  let buckets = Array.from(
    {
      length: 10,
    },
    () => []
  );
  // loop length of max digit times (m times - maxLength)
  for (let i = maxLength; i >= 0; i--) {
    // loop through whole array (n times - array.length)
    for (let j = 0; j < result.length; j++) {
      bucketNo = getDigit(result[j], maxLength - i + 1);
      buckets[bucketNo].push(result[j]);
    }
    // removing elements from result array
    result = [];
    buckets.forEach((bucket) => {
      while (bucket.length > 0) {
        // push them into results array
        result.push(bucket.shift());
      }
    });
  }
  return result;
}

sortedArray = radixSort([3, 2, 9874, 49784, 4, 0, 21, 20, 9, 0, 9, 9, 49783]);
console.log(sortedArray);

/*

  time complexity - O(m*n) 
  where,
     m - length of the max digit in input array
     n - length of the array

  space complexity - O(n)

*/
