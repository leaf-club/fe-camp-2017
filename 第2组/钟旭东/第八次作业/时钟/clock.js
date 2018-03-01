// 将数字进行排列
var divs=document.getElementsByClassName("num-child");
var spans=document.getElementsByTagName("span");
for(var i=0;i<divs.length;i++)
{
    divs[i].style.webkitTransform="rotate("+(i+1)*30+"deg)";
}
for(var i=0;i<spans.length;i++)
{
    spans[i].style.webkitTransform="rotate("+(-(i+1)*30)+"deg)";
}
// 钟表转动
var hourpointer=document.getElementById("hour");
var minutepointer=document.getElementById("minute");
var secondpointer=document.getElementById("second");
var datenow1=new Date();
function revolve(){
    var datenow=new Date();
    var hournow=datenow.getHours();
    var minutenow=datenow.getMinutes();
    var secondnow=datenow.getSeconds();
    hourpointer.style.webkitTransform="rotate("+(hournow*30+minutenow/60*30)+"deg)";
    minutepointer.style.webkitTransform="rotate("+(minutenow*6+secondnow/60*6)+"deg)";
    secondpointer.style.webkitTransform="rotate("+(secondnow*6)+"deg)";
}
revolve();
setInterval(revolve,1000);