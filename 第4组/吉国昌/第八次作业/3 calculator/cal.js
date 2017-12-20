/**
 * 参考资料
 * http://www.cnblogs.com/imyeah/archive/2011/12/28/2304197.html
 */
window.onload = function () {
  var obox = document.querySelector('#box');
  var okeys = obox.querySelector('#keyboard');
  var show = obox.querySelector('#in');
  //设置标志
  var tag = 0;      //分辨此时输入的是否是第二个运算数
  var repeat = 0;   //避免重复输入运算符
  var overflow = 0  //数值溢出后无法输入
  var type = 0;     //运算符类型
  var first = 1;    //第一次调用cal，实现滞后运算
  //设置变量
  var numx = 0, mumy = 0, result = 0;
  //无法被复选
  obox.onselectstart = function () {
    return false;
  }
  //显示屏无法选中和输入
  show.disabled = 'true';
  obox.onclick = function (event) {
    var atarget = event.target;
    //判断点击的是按钮时进行计算
    if (atarget.nodeName == 'BUTTON') {
      switch (atarget.innerHTML) {
        case '←':
          backspace();
          break;
        case 'C':
          clearscreen();
          break;
        case '+':
          add();
          break;
        case '-':
          subtract();
          break;
        case '×':
          multiply();
          break;
        case '÷':
          divide();
          break;
        case '%':
          percent();
          break;
        case '=':
          equal();
          break;
        case '·':
          dot();
          break;
        default:
          scan(atarget.innerHTML);
      }
    }
  }
  var flush = function (string) {
    if (string.indexOf('.') != -1)
      string = string.substring(0, string.indexOf(".") + 5);
    if (String(string).length <= 18)
      show.value = string;
    else {
      show.value = '数值溢出';
      overflow = 1;
    }
  }
  var cal = function () {
    if (overflow || repeat) return;
    numy = Number(show.value);
    if (first == 0) {
      switch (type) {
        case 1:
          result = numx + numy + '';
          repeat = 1;
          break;
        case 2:
          result = numx - numy + '';
          repeat = 1;
          break;
        case 3:
          result = numx * numy + '';
          repeat = 1;
          break;
        case 4:
          if (numy) {
            result = numx / numy + '';
            repeat = 1;
          }
          else {
            flush('不能被0除');
            overflow = 1;
            return;
          }
          break;
      }
    }
    else {
      result = numy + '';
      first = 0;
    }
    numx = Number(result);
    flush(result);
  }
  var backspace = function () {
    if (overflow) return;
    var str = show.value;
    if (str.length == 3 && str[1] == '.') {
      flush(str[0]);
      return;
    }
    if (str.length == 2 && str[0] == '-') {
      flush('0');
      return;
    }
    if (str.length > 1)
      str = str.substr(0, str.length - 1);
    else
      str = '0';
    flush(str);
  }
  var clearscreen = function () {
    numx = 0;
    flush('0');
    tag = overflow = repeat = type = 0;
    first = 1;
  }
  var add = function () {
    cal();
    type = 1;
    tag = 1;
  }
  var subtract = function () {
    cal();
    type = 2;
    tag = 1;
  }
  var multiply = function () {
    cal();
    type = 3;
    tag = 1;
  }
  var divide = function () {
    cal();
    type = 4;
    tag = 1;
  }
  var percent = function () {
    cal();
    var numz = Number(show.value);
    if (numz > 100)
      result = numz / 100 + '%';
    else if (numz > 0)
      result = numz + '%';
    flush(result);
    tag = 1;
  }
  var equal = function () {
    cal();
    type = numy = result = 0;
    first = tag = 1;
    repeat = 0;
  }
  var dot = function () {
    if (overflow) return;
    var str = show.value;
    if (str.indexOf('.') == -1)
      str += '.';
    flush(str);
  }
  var scan = function (digit) {
    if (overflow) return;
    var str = show.value;
    if (str != '0' && tag == 0)
      str += digit;
    else if (digit != '00')
      str = digit;
    else
      str = '0';
    repeat = 0;
    tag = 0;
    flush(str);
  }
}