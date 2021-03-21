const { getDigit, firstDigit, radixSort } = require("./radixsort");

describe("Radix Sort", () => {
  it("Should sort the values in array", () => {
    expect(radixSort([5, 6, 7, 8, 1, 4, 0, 2]).toString()).toBe(
      [0, 1, 2, 4, 5, 6, 7, 8].toString()
    );
  });
});
