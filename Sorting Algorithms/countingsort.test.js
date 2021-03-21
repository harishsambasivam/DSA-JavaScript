const { countingSort } = require("./countingsort");

describe("Counting Sort", () => {
  it("Should sort the values in array", () => {
    let arr = [5, 6, 7, 8, 1, 4, 0, 2];
    expect(countingSort(arr).toString()).toBe(
      [0, 1, 2, 4, 5, 6, 7, 8].toString()
    );
  });
});
