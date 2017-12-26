window.onload = function () {
  localStorage.password = 123456;//存储密码
  var nth = -1;//对应6个dots
  var input = '';//输入的密码
  var ui = document.querySelector('#container');
  var del = ui.querySelector('#bottom .right');
  var dots = ui.getElementsByClassName('dot');
  var date = new Date();
  /*----------*/
  ui.querySelector('#head').innerHTML = ((parseInt(date.getHours()) < 10) ? ('0' + date.getHours()) : date.getHours()) +
    ':' + ((parseInt(date.getMinutes()) < 10) ? ('0' + date.getMinutes()) : date.getMinutes());
  /*----------*/
  setInterval(function () {
    var date = new Date();
    /*----------*/
    ui.querySelector('#head').innerHTML = ((parseInt(date.getHours()) < 10) ? ('0' + date.getHours()) : date.getHours()) +
      ':' + ((parseInt(date.getMinutes()) < 10) ? ('0' + date.getMinutes()) : date.getMinutes());
    /*----------*/
  }, 1000);
  //无法被选中
  ui.onselectstart = function () { return false; }
  document.querySelector('#control').onselectstart = function () { return false; }
  /* ----------------------------------------------------------------- */
  //复位函数
  function reset() {
    nth = -1;
    input = '';
    ui.querySelector('#hint p').innerHTML = '触控ID或输入密码';
    ui.querySelector('#dots').style.visibility = 'visible';
    ui.querySelector('#dots').style.display = 'flex';
    ui.querySelector('#keys').style.display = 'flex';
    ui.querySelector('#bottom').style.display = 'block';
    ui.querySelector('#return').style.display = 'none';
    document.querySelector('#bg').className = '';
    del.innerHTML = '取消';
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
    }
  }
  /* ----------------------------------------------------------------- */
  //UI区域
  //数字键盘添加事件
  ui.addEventListener('click', function (event) {
    if (event.target.className == 'num' || event.target.className == 'char') {
      //console.log(event.target);
      input += event.target.getAttribute("value");
      console.log('input : '+ input);
      if (input.length > 0 && input.length < 7) {
        nth++;
        dots[nth].classList.add('active');
        if (input.length < 6) {
          del.innerHTML = '删除';
        }
        if (input.length == 6) {
          del.innerHTML = '取消';
          //解锁成功
          if (localStorage.getItem('password') == parseInt(input)) {
            ui.querySelector('#hint p').innerHTML = '解锁成功';
            ui.querySelector('#dots').style.display = 'none';
            ui.querySelector('#keys').style.display = 'none';
            ui.querySelector('#bottom').style.display = 'none';
            ui.querySelector('#return').style.display = 'block';
            document.querySelector('#bg').className = 'clear';
          }
          //解锁失败，提示1s后复位
          else {
            ui.querySelector('#hint p').innerHTML = '密码错误，请重试';
            ui.querySelector('#dots').style.visibility = 'hidden';
            setTimeout(reset, 750);
          }
        }
      }
    }
  });
  //复位
  ui.querySelector('#return').addEventListener('click', reset);
  //删除键添加事件
  ui.querySelector('#bottom .right').addEventListener('click', function () {
    if (this.innerHTML == '删除') {
      if (input.length == 1) {
        dots[0].classList.remove('active');
        reset();
      }
      else {
        dots[nth].classList.remove('active');
        nth--;
        input = input.substring(0, input.length - 1);
      }
    }
  });
  /* ----------------------------------------------------------------- */
  //控制台添加事件
  //设置密码
  document.querySelector('#control button').addEventListener('click', function () {
    if (document.querySelector('#control button').innerHTML == '设置') {
      var newpwd = document.querySelector('#control input').value;
      if (Boolean(Number(newpwd))) {
        if (newpwd.length != 6) {
          document.querySelector('#control input').disabled = true;
          document.querySelector('#control input').style.color = 'red';
          document.querySelector('#control input').value = '请输入六位密码';
          setTimeout(function () {
            document.querySelector('#control input').disabled = false;
            document.querySelector('#control input').style.color = 'black';
            document.querySelector('#control input').value = '';
            document.querySelector('#control input').placeholder = '设置6位密码 默认' + localStorage.getItem('password');
          }, 1000);
        }
        else {
          localStorage.setItem('password', Number(newpwd));
          document.querySelector('#control input').disabled = true;
          document.querySelector('#control input').value = '密码为' + localStorage.getItem('password');
          document.querySelector('#control button').innerHTML = '重置';
        }
      }
      else {
        document.querySelector('#control input').disabled = true;
        document.querySelector('#control input').style.color = 'red';
        document.querySelector('#control input').value = '请输入数字密码';
        setTimeout(function () {
          document.querySelector('#control input').disabled = false;
          document.querySelector('#control input').style.color = 'black';
          document.querySelector('#control input').value = '';
          document.querySelector('#control input').placeholder = '设置6位密码 默认' + localStorage.getItem('password');
        }, 1000);
      }
    }
    else {
      document.querySelector('#control button').innerHTML = '设置';
      document.querySelector('#control input').disabled = false;
      document.querySelector('#control input').value = '';
      document.querySelector('#control input').placeholder = '设置6位密码 默认' + localStorage.getItem('password');
    }
  });
}