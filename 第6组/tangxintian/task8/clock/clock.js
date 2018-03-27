var oNumber=document.getElementById("number");
var oDiv=oNumber.getElementsByTagName("div");
var oSpan=oNumber.getElementsByTagName("span");
for(var i=0;i<oDiv.length;i++){
    oDiv[i].style.WebkitTransform="rotate(" + i * 30 + "deg)";
}   
for(var j=0;j<oSpan.length;j++){
    oSpan[j].style.WebkitTransform="rotate("+ j * -30 + "deg)";
}   
function ColorNumber(){
    var oHoure=document.getElementById("houre");
    var oMinute=document.getElementById("minute");
    var oSecond=document.getElementById("second");

    var nowTime=new Date();
    var nowHoure=nowTime.getHours();
    var nowMinute=nowTime.getMinutes();
    var nowSecond=nowTime.getSeconds();
    var houreDeg=(nowMinute/60)*30;
    var minuteDeg=(nowSecond/60)*6;
    oHoure.style.WebkitTransform="rotate("+ (nowHoure * 30+houreDeg) + "deg)";
    oMinute.style.WebkitTransform="rotate("+ (nowMinute * 6+ minuteDeg) + "deg)";
    oSecond.style.WebkitTransform="rotate("+ (nowSecond * 6) + "deg)";
}
ColorNumber();
setInterval(ColorNumber,1000);
