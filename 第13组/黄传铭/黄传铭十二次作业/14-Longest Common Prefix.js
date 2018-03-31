function longest(str){
    if(str.length == 0){
        return "";
    }
    var temp = str[0];
    for(var i = 1; i < str.length; i++){
        while(str[i].indexOf(temp) != 0){
            temp = temp.substring(0, temp.length - 1);
            if(temp.length == 0){
                return "";
            }
        }
    }
    // console.log(temp);
}
// var str = ['leets', 'leetcode', 'leet', 'leeds'];
// longest(str);