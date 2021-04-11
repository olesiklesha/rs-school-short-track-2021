/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let middle = 0;
  let end = array.length - 1;
  let current = 0;

  while (start <= end) {
    middle = Math.floor(start + (end - start) / 2);
    current = array[middle];

    if (current === value) return middle;

    if (current < value) {
      start = middle + 1;
    } else if (current > value) {
      end = middle - 1;
    } else return -1;
  }

  return -1;
}

module.exports = findIndex;
