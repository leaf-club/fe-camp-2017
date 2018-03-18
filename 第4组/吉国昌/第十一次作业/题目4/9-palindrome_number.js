/**
 * @param {number} x
 * @return {boolean}
 * Runtime:296ms
 * beats 100.00% of js submissions
 */
var isPalindrome = function(x) {
  return x == x.toString().split('').reverse().join('');
};