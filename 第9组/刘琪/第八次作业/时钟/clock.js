function clock(){
    var d= new Date(),
        h=d.getHours()%12,
        m=d.getMinutes(),
        s=d.getSeconds();
    var hdeg='rotate('+(30*h+0.5*m-90)+'deg)',//div设置了宽度为长边，所以-90°调整位置。
        mdeg='rotate('+(6*m+0.1*s-90)+'deg)',
        sdeg='rotate('+(6*s-90)+'deg)';
    document.getElementById('hourHand').style.transform=hdeg; 
    document.getElementById('minHand').style.transform=mdeg;
    document.getElementById('secHand').style.transform=sdeg;
}
clock();
var int=setInterval(clock,1000);