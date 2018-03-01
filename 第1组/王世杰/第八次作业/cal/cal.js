var 
    num = 0,
    screen = document.getElementById('dis');
function inputs(num) {
    if(num == '%') {
        screen.value = Math.round(screen.value)/100;
    }else {
        screen.value += document.getElementById(num).value;
    }
}
function equal() {
    screen.value = eval(screen.value);
}
function clear1() {
    screen.value = screen.value.substring(0,0);
}
function Back() {
    screen.value = screen.value.substring(0,screen.value.length - 1);
}