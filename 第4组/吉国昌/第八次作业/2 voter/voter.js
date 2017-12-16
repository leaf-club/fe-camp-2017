var numa = 0, a, 
    numb = 0, b, 
    numc = 0, c, 
    numd = 0, d, 
    sum = 60; //假定最大投票人数为60人
var show1 = document.getElementById('show1'),
    show2 = document.getElementById('show2'),
    show3 = document.getElementById('show3'),
    show4 = document.getElementById('show4');
var btn1 = document.getElementById('btn1'),
    btn2 = document.getElementById('btn2'),
    btn3 = document.getElementById('btn3'),
    btn4 = document.getElementById('btn4');
//display函数
function display() {
  a = numa / sum;
  b = numb / sum;
  c = numc / sum;
  d = numd / sum;
  flush(show1, a, numa);
  flush(show2, b, numb);
  flush(show3, c, numc);
  flush(show4, d, numd);
}
display();
//刷新输出内容
function flush(a, b, c) {
  if (b < 1) 
    a.style.height = b * 180 + 'px';
  else
    a.style.height = '180px';
  a.childNodes[0].innerHTML = c;
}
btn1.addEventListener('click', function () {
  numa++;
  //alert('投票成功');
  display();
})
btn2.addEventListener('click', function () {
  numb++;
  //alert('投票成功');
  display();
})
btn3.addEventListener('click', function () {
  numc++;
  //alert('投票成功');
  display();
})
btn4.addEventListener('click', function () {
  numd++;
  //alert('投票成功');
  display();
})
document.onselectstart = function () {
  return false;
}