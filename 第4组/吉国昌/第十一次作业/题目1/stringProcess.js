var stringProcess = function(x) {
    try {
      temp = x.split('-').join('').toUpperCase();
      if (temp.length != 20) {
        throw '异常：无效的密码格式'
      }
      return temp;
    }
    catch(err) {
      alert(err);
      console.log(err);
    }
}