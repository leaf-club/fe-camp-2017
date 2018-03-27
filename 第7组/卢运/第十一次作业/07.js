var reverse = function (x) {
    var a, b, c, y, result;
    y = Math.abs(x)
    a = y % 10;
    b = parseInt(y / 10) % 10;
    c = parseInt(y / 100) % 10;
    result = a * 100 + b * 10 + c;
    if (x < 0) {
        alert(-1 * result);
    } else {
        alert(result);
    }
};