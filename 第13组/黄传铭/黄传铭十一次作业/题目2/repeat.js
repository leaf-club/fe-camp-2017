var repeatString = function(x){
    var temp = x.split(',') , temp1 = [];
    var k = 0;
    for (var i = 0; i < temp.length; i++){
        if(temp[i] != 1){
            temp1[k++] = temp[i];
        }
        for(var j = i + 1; j < temp.length; j++){
            if(temp[i] == temp[j]){
                temp[j] = '1';
            }
        }
    }
    var str = temp1.join(',');
    alert(str);
};

// var str = '游泳,健身,篮球,游泳,篮球,阅读';
// repeatString(str);