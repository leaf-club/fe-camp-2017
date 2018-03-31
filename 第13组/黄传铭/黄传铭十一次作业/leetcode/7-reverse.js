function reverse(num) {
    var temp = num, x, y = 0;
    while(temp != 0){
        x = temp%10;
        temp = parseInt(temp/10);
        y = x + y*10;
    }
    return y;
}

console.log(reverse(123456));