const { quickSort, pivot, swap } = require("./quicksort");

describe("Quick Sort", () => {
  it("Should return the pivot index", () => {
    expect(pivot([5])).toBeUndefined;
    expect(pivot([6, 5])).toBe(1);
    expect(pivot([5, 6])).toBe(0);
    expect(pivot([5, 6, 7, 8, 1, 4, 0])).toBe(3);
    expect(pivot([5, 6, 7, 8, 1, 4, 0, 2])).toBe(4);
  });

  it("Should swap the values in array", () => {
    let arr = [1, 2, 3, 4, 5, 6, 7];
  });

  it("Should sort the values in array", () => {
    let arr = [5, 6, 7, 8, 1, 4, 0, 2];
    expect(quickSort(arr).toString()).toBe([0, 1, 2, 4, 5, 6, 7, 8].toString());
  });
});
