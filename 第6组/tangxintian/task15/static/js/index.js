var ws = new WebSocket("ws:localhost:3000");
ws.onopen = function() {
  console.log("websocket open!");
  Btn = document.getElementById('sendBtn');
  Message = document.getElementById('sendText');
  Btn.addEventListener('click',foo());
  Message.addEventListener('keypress',(el)=>{
    if (el.charCode === 13) {
      foo();
    } 
  })
  function foo() {
    var txt = Message.value;
    Message.value = '';
    if (txt) {
      ws.send(txt);
    }
  }
}
ws.onclose = function() {
  console.log("websocket close!");
}
ws.onmessage = function(e) {
  console.log(e.data);
  showMessage(e.data);
}
function showMessage(data) {
  var div = document.createElement('div');
  var span = document.createElement('span');
  var item =JSON.parse(data);
  span.innerHTML = item.message;
  div.appendChild(span);
  div.classList.add('chatBox');
  document.getElementById('container').appendChild(div);
}