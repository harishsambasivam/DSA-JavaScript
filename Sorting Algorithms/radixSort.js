function firstDigit(num) {
    if (num == 0)
        return 0;
    length = parseInt(Math.log10(num));
    firstdigit = parseInt(num / Math.pow(10, length));
    return firstdigit;
}

function getDigit(num, position) {
    length = parseInt(Math.log10(num)) + 1;
    if (position > length)
        return 0;
    digit = parseInt(num % Math.pow(10, position));
    return firstDigit(digit);
}


function radixSort(array) {
    let maxLength = Math.floor(Math.log10(Math.max(...array)));
    let temp = [...array];
    let buckets = Array.from({
        length: 10,
    }, ()=>[]);
    for (let i = maxLength; i >= 0; i--) {
        for (let j = 0; j < temp.length; j++) {
            bucketNo = getDigit(temp[j], maxLength - i + 1);
            buckets[bucketNo].push(temp[j]);
        }
        temp = [];
        console.log(buckets);
        buckets.forEach((bucket)=>{
            while (bucket.length > 0) {
                temp.push(bucket.shift());
            }
        }
        );
    }
    console.log(temp)
}

radixSort([3, 2, 9874, 49784, 4,0, 21,20,9,0,9,9,49783]);
