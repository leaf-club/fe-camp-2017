function days() {
  var today = new Date(),
    list = [];
  for (var i = 1; i < 29; i++) {
    date = '2018,4,' + i;
    var temp = new Date(date);
    // console.log(temp);
    if (temp.getDay() === 3) {
      list.push('{date:' + "'2018/4/" + i + "', daysAfter: " + Math.floor((temp.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)) + ' }')
    }
  }
  return list;
}
days();