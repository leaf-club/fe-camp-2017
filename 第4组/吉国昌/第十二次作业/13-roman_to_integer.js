/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var refer = {'I':1, 'X':10, 'C':100, 'M':1000, 'V':5, 'L':50, 'D':500};
  var l1 = s.split('');
  var l2 = l1.map(function (item, idnex, array) {
      return refer[item];
  })
  var result = l2[0];
  for (var i = 1;i < l2.length;i++) {
      if (l2[i] > l2[i - 1]) {
          result += l2[i] - 2 * l2[i - 1];
      }
      else {
          result += l2[i];
      }
  }
  return result;
};