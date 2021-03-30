let res = [];
function sleepSort(array) {
  array.forEach((e) => {
    setTimeout(() => {
      res.push(e);
    }, e * 1000);
  });
}

// sleepSort([5,1,2,4,3,4,5,6,8,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]);
let array = new Array(10000).fill().map((e) => Math.floor(Math.random() * 10));
sleepSort(array);
