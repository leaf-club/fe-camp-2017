var checkString = function(x){
    var temp = x.split('-'),
        upstring = temp.join('').toUpperCase();
        if (upstring.length !== 20){
            alert('异常：无效的密码格式');
        }
        else{
            alert(upstring);
            console.log(upstring);
        }
};

// var str1 = 'asdf-asdf-asdf-adff-gefg'
//     str2 = 'hello world';
// checkString(str1);
// checkString(str2);
