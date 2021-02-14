const { bubbleSort, swap } = require("./bubblesort");

describe("Quick Sort", () => {
  it("Should swap the values in array", () => {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    swap(0, 1, arr);
    const foo = () => arr.toString();
    expect(foo()).toBe([2, 1, 3, 4, 5, 6, 7].toString());
  });

  it("Should sort the values in array", () => {
    let arr = [5, 6, 7, 8, 1, 4, 0, 2];
    expect(bubbleSort(arr).toString()).toBe(
      [0, 1, 2, 4, 5, 6, 7, 8].toString()
    );
  });
});
