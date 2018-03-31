/**
 * @param {number} x
 * @return {number}
 * Runtime:84ms
 * beats 100.00% of js submissions
 */
var reverse = function (x) {
  var tag = 0;
  if (x < 0) {
    x = -x;
    tag = 1;
  }
  var a = parseInt(x.toString().split('').reverse().join(''));
  if (a > 2147483647) {
    a = 0;
  }
  if (tag === 1) {
    a *= -1;
  }
  return a;
};