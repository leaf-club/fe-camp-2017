function password(s) {
    var a = [];
    var b = [];
    for (var i = 0; i < s.length; i++) {
        var ss = s.substr(i, 1);
        a.push(ss);
    }
    for (let i = 0; i < a.length; i++) {
        var n=a[i].charCodeAt();
        if ( n>= 97 && n <= 122) {
           console.log(a[i]);
            var c=a[i].toUpperCase();
            b.push(c)
        }
        else if (a[i] == "-") {
            continue;
        }
        else if (n >= 65 && n <= 90) {
           // console.log(a[i]);
            b.push(a[i])
        }
        else if(a[i]>=0&&a[i]<=9){
          //console.log(a[i]);
            b.push(a[i]);
        }
        else {
           
            break;
        }
    }
    //console.log(b);
    if (b.length != 20) {
        alert("wrong")
    }
    else{
        alert(b.join(""))
    }
}
password("hello word");