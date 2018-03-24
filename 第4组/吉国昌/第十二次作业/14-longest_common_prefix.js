/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs === []) return '';
  var result = '';
  var sample = strs[0];
  if (typeof sample === 'string') {
    for (var i = 0; i < sample.length; i++) {
      if (strs.every(function (item, index, array) { return (item[i] === sample[i]); })) {
        result += sample[i];
      }
      else break;
    }
  }
  return result;
};