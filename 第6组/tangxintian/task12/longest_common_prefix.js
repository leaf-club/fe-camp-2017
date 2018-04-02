/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    var prefix = strs[0];
    for (var i = 1; i < strs.length; i++)
    while (strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1);
        if (prefix.length === 0) return "";
    }
    return prefix; 
};