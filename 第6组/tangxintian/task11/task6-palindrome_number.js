/**
 * @param {number} x
 * @return {boolean}
 * 300 ms
 * beats 58.16 % of javascript submissions.
 */
var isPalindrome = function(x) {
    var flag = false;
    const reversed =  parseInt(Math.abs(x).toString().split('').reverse().join(''));
    if(reversed === x){
        flag = true;
    }
    return flag;
};