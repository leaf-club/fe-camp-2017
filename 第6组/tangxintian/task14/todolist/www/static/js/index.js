function add() {
  var title = document.querySelector('#title');
  if (title.value === "") {
    alert('内容不能为空');
  } else {
    var item = title.value;
    $.ajax({
      url: '/index/add',
      type: 'POST',
      dataType: 'json',
      data: {
        title: item
      },
      success: res => {
        if (!res.errno) {
          window.location.reload();
        } else alert(res.errmsg);
      }
    });
  }
}

function clear() {
  if (confirm('你确定要删除所有todo项吗？')) {
    $.ajax({
      url: 'index/clear',
      type: 'POST',
      success: res => {
        if (!res.errno) {
          window.location.reload();
        } else alert(res.errmsg);
      }
    });
}
}

function remove(itemId) {
  $.ajax({
    url: '/index/remove',
    type: 'POST',
    dataType: 'json',
    data: {
      id: itemId
    },
    success: res => {
      if (!res.errno) {
        window.location.reload();
      } else alert(res.errmsg);
    }
  });
}

function update(itemId, state) {
  $.ajax({
    url: '/index/update',
    type: 'POST',
    dataType: 'json',
    data: {
      id: itemId,
      status: state
    },
    success: res => {
      if (!res.errno) {
        window.location.reload();
      } else alert(res.errmsg);
    }
  });
}
function edit(id) {
  var p = $('#p-' + id);
  var value = p.text();
  p.html( "<input id='input-" + id + "' value='" + value + "' />");
  var inputE1 = document.getElementById('input-' + id);
  inputE1.setSelectionRange(0, inputE1.value.length);
  inputE1.focus();
  inputE1.onblur = function() {
    if (inputE1.value.length === 0) {
      p.html(value);
      alert('内容不能为空');
    } else {
      var newTitle = inputE1.value;
      p.html(newTitle);
      $.ajax({
        url: '/index/edit',
        type: 'POST',
        dateType: 'json',
        data: {
          itemId: id,
          title: newTitle
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