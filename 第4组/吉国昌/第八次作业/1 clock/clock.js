//文本无法复选
document.getElementById('box').onselectstart = function () {
  return false;
}
//添加60个点
for (var i = 0;i < 60;i++) {
  var node1 = document.createElement('div');
  var node2 = document.createElement('div');
  if (i%5)
    node2.className = 'dot';
  else
    node2.className = 'dot2';
  node2.appendChild(node1);
  node2.style.transform = 'rotate(' + i*6 + 'deg)';
  document.getElementById('box').appendChild(node2);
}
//刷新输出当前时刻
var hour = document.getElementById('hourHand'),
    minute = document.getElementById('minuteHand'),
    second = document.getElementById('secondHand'),
    clock = function () {
      time = new Date(),
      h = 'rotate(' + (time.getHours() * 30 + time.getMinutes() * 0.5) + 'deg)',
      m = 'rotate(' + (time.getMinutes() * 6 + time.getSeconds() * 0.1) + 'deg)',
      s = 'rotate(' + time.getSeconds() * 6 + 'deg)';
      hour.style.transform = h;
      minute.style.transform = m;
      second.style.transform = s;
    }
clock();
setInterval(clock, 1000);