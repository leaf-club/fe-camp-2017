var a = 0, b = 0, c = 0, d = 0, top = 32;
var btn1 = document.getElementById("btn1"),
    btn2 = document.getElementById("btn2"),
    btn3 = document.getElementById("btn3"),
    btn4 = document.getElementById("btn4");
var show1 = document.getElementById("show1"),
    show2 = document.getElementById("show2"),
    show3 = document.getElementById("show3"),
    show4 = document.getElementById("show4");
var numa = document.getElementById("numa"),
    numb = document.getElementById("numb"),
    numc = document.getElementById("numc"),
    numd = document.getElementById("numd");    
function display(){
   show(show1, a, numa); 
   show(show2, b, numb);
   show(show3, c, numc);
   show(show4, d, numd);
}
show1.previousSibling.innerHTML='4';
display();
function show(a, b, c){
    if(b<32||b==32){
        a.style.height = b*10+'px';
        c.innerHTML=b;
    }
    else{
        a.style.height = '320px';
        c.innerHTML=32;
    }
   
}
btn1.addEventListener('click', function(){
    a++;
    display();
})
btn2.addEventListener('click', function(){
    b++;
    display();
})
btn3.addEventListener('click', function(){
    c++;
    display();
})
btn4.addEventListener('click', function(){
    d++;
    display();
})
