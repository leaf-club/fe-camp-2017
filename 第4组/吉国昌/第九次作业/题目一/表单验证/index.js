$(document).ready(function () {
  $('#demoForm').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 10
      },
      password: {
        required: true,
        minlength: 2,
        maxlength: 16
      },
      're-password':{
        equalTo:'#password'
      },
      email: {
        required:true,
        email:true
      }
    },
    messages:{
      username: {
        required: '请填写用户名',
        minlength: '用户名最小为2位',
        maxlength: '用户名最大为10位'
      },
      password: {
        required: '请填写密码',
        minlength: '密码最小为2位',
        maxlength: '密码最大为16位'
      },
      're-password':{
        equalTo:'密码不一致'
      },
      email: {
        required:'请填写邮箱',
        email:'邮箱格式错误'
      }
    }
  });
  $('#reset').click(function(){
    window.location.assign('index.html');
  });
});
