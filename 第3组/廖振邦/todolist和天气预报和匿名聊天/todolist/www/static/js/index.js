function add(){
    var title = document.querySelector("#title");
    if(title.value == ""){
        alert("内容不能为空");
    } else{
        var item = title.value;
        $.ajax({
            url: '/home/index/add',
            type: 'POST',//传到src  里面控制器的addfunction()
            dataType: 'json',
            data: {
                title: item
            },
            success: res => {
                if(!res.errno) {
                    window.location.reload();
                } else alert(res.errmsg);
            }
        });
    }
}
//还需要别的操作 比如 delete之类的在这里写
function update(id,status){
    $.ajax({
        url:'/home/index/update',
        type:'post',
        data:{
            todoid:id,
            status:status
        },
        success: res => {
            if(!res.errno) {
                window.location.reload();
            } else alert(res.errmsg);
        }
    })
}
function remove(id){
    $.ajax({
        url:'/home/index/remove',
        type:'post',
        data:{
            id:id,
        },
        success: res => {
            if(!res.errno) {
                window.location.reload();
            } else alert(res.errmsg);
        }
    })
}
function clear(){
    $.ajax({
        url:'/home/index/clear',
        type:'post',
        data:{
           
        },
        success: res => {
            if(!res.errno) {
                window.location.reload();
            } else alert(res.errmsg);
        }
    })
}
function edit(id) {
    var p = $("#p-" + id);
    var value = p.text();
    p.html("<input id='input-" + id + "'value='" + value + "' />");
    var inputEl = document.getElementById('input-' + id);
    inputEl.setSelectionRange(0, inputEl.value.length);
    inputEl.focus();
    inputEl.onblur = function () {
      if (inputEl.value.length == 0) {
        p.html(value);
        alert("内容不能为空");
      } else {
        var newTitle = inputEl.value;
        p.html(newTitle);
        $.ajax({
          url: '/home/index/edit',
          type: 'POST',
          dateType: 'json',
          data: {
            id: id,
            value: newTitle
          },
          success: res => {
            if (!res.errno) {
              window.location.reload();
            } else alert(res.errmsg);
          }
        });
      }
    }
 
}