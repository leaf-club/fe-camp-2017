var countDown = function() {
  var now = new Date();
  var a = now.getTime();
  var l = [];
  for (var i = 1;i < 29;i++) {
    date = '2/' + i + '/2017';
    //onsole.log(date);
    var temp = new Date(Date.parse(date));
    //console.log(typeof temp);
    if (temp.getDay() === 3) { //getYime方法返回0-6（0指的是周日）
      l.push('{date:'+'\'2017/2/' + i + '\', daysAfter: ' + Math.floor((a-temp.getTime())/1000/60/60/24) +' }')
    }
  }
  return l;
}