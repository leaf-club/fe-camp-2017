/**
 * @param {string} s
 * @return {number}
 */

let getIntFromRoman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

var romanToInt = function (s) {
    let sum = 0;
    let curr, next;
    for (let i = 0; i < s.length - 1; i++) {
        curr = getIntFromRoman[s[i]];
        next = getIntFromRoman[s[i + 1]];
        if (curr < next)
            sum -= curr;
        else
            sum += curr;
    }
    return sum + getIntFromRoman[s[s.length - 1]];
};