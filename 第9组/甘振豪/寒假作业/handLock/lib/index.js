var password = localStorage.getItem('handlock_passwd') || '11121323';
var locker = new HandLock.Locker({
  container: document.querySelector('#handlock'),
  check: {
    checked: function (res) {
      locker.clearPath();
      if (res.err) {
        if (res.err.message === HandLock.Locker.ERR_PASSWORD_MISMATCH) {
          hint.innerHTML = '密码错误，请重新绘制！';
        } else {
          toast.className = 'show';
          setTimeout(function () {
            toast.className = 'hide';
          }, 1000);
        }
      } else {
        hint.innerHTML = '密码正确！';
      }
    },
  },
  update: {
    beforeRepeat: function (res) {
      locker.clearPath();
      if (res.err) {
        toast.className = 'show';
        setTimeout(function () {
          toast.className = 'hide';
        }, 1000);
      } else {
        hint.innerHTML = '请再次绘制相同图案';
      }
    },
    afterRepeat: function (res) {
      locker.clearPath();
      if (res.err) {
        if (res.err.message === HandLock.Locker.ERR_PASSWORD_MISMATCH) {
          hint.innerHTML = '两次绘制的图形不一致，请重新绘制！';
        } else {
          toast.className = 'show';
          setTimeout(function () {
            toast.className = 'hide';
          }, 1000);
        }
      } else {
        hint.innerHTML = '密码更新成功！';
        password = res.records;
        localStorage.setItem('handlock_passwd', password);
        checkmode.click();
      }
    },
  }
});

selectMode.addEventListener('change', function (e) {
  var value = e.target.value;
  if (value === 'update') {
    locker.clearPath();
    hint.innerHTML = '设置密码，请绘制密码图案';
    locker.update();
  } else if (value === 'check') {
    locker.clearPath();
    hint.innerHTML = '验证密码，请绘制密码图案';
    locker.check(password);
  }
});
var p = locker.check(password);