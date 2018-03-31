var isPalindrome = function (x) {
    var num = Math.abs(x),
        y = num.toString(),
        myarr = y.split("");
    myarr.reverse();
    var mystr = myarr.join("");
    if (y == mystr) {
        alert(x + "是回文数")
    } else {
        alert(x + "不是回文数")
    }
};