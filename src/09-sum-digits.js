/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  function numb(num) {
    const arr = String(num).split('').length;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

  const result = numb(n);
  let finRes = 0;

  if (result > 10) {
    finRes = numb(result);
  }

  return finRes;
}

module.exports = getSumOfDigits;
