$(function(){
    var clock = [
        '<ul id="clock">',
        '<li id="seconds"></li>',
        '<li id="hours"></li>',
        '<li id="minutes"></li>',
        '</ul>'].join('');			
            
    $(clock).fadeIn().appendTo('body');
  
    (function Clock(){
        var  hours = new Date().getHours(),
             minutes = new Date().getMinutes(),
             seconds = new Date().getSeconds();                
        var hrotate = hours * 30 + (minutes / 2);
        var mrotate = minutes * 6;
        var srotate = seconds * 6;
        $("#hours").css({
            'transform'	:  'rotate('+ hrotate +'deg)',
        });                           
        $("#minutes").css({
            'transform'	:  'rotate('+ mrotate +'deg)',
        });                    
        $("#seconds").css({
            'transform'	:  'rotate('+ srotate +'deg)',
        });
        setTimeout(Clock,1000);
    })();
    });