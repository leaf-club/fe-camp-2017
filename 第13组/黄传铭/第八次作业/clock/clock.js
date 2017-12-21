var hour = document.getElementById("hour"),
    min = document.getElementById("min"),
    scond = document.getElementById("second");
clock = function(){
     time = new Date();
     h = 'rotate('+(time.getHours()*30+time.getMinutes()*0.5)+'deg)';
     m = 'rotate('+(time.getMinutes()*6+time.getSeconds()*0.1)+'deg)'; 
     s = 'rotate('+time.getSeconds()*6+'deg)'; 
    hour.style.transform = h;
    min.style.transform = m;
    second.style.transform = s;
}
clock();
setInterval(clock, 1000);