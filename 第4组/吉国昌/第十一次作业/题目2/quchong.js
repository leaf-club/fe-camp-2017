var quchong = function(x) {
  var temp = x.split(',');
  for (var i = 0;i < temp.length;i++) {
    for (var j = i+1;j < temp.length;j++) {
      if (temp[i] == temp[j]) {
        temp[j] = -1;
      }
    }
  }
  return temp.filter(function(item, index, array){
    return (item !== -1);
  }).join(',');
}