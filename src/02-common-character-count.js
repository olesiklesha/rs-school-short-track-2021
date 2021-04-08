/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr = s1.split('');
  const second = s2.split('');
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (second.indexOf(element) !== -1) {
      count++;
      second.splice(second.indexOf(element), 1);
    }
  }

  return count;
}

module.exports = getCommonCharacterCount;
