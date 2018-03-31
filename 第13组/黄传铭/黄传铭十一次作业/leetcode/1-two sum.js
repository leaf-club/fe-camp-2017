function twoSum(list, target) {
    var result = [];
    for(var i = 0; i < list.length; i++){
        for(var j = i + 1; j < list.length; j++){
            if(list[i] + list[j] == target){
                result.push(i, j);
            }
        }
    }
    return result;
}
// var list = [1,10,8];
// console.log(JSON.stringify(twoSum(list, 18)));