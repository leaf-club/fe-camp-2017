var btns=document.getElementsByClassName("btn");
var result=document.getElementById("result");
var clear=document.getElementById("clear");
var caculate=document.getElementById("caculate")
for(var i=0;i<btns.length;i++)
{
    btns[i].onclick=function(){
        var textsaver=result.innerText;
        result.innerText=textsaver+this.innerText;
    }
}
clear.onclick=function(){
    result.innerText="";
}
function caculating(content){
    var firadd=content.indexOf("+");
    if(firadd>-1){
    return caculating(content.substr(0,firadd))+caculating(content.substr(firadd+1));
    }
    var firadd=content.indexOf("-");
    if(firadd>-1){
    return caculating(content.substr(0,firadd))-caculating(content.substr(firadd+1));
    }
    var firadd=content.indexOf("*");
    if(firadd>-1){
    return caculating(content.substr(0,firadd))*caculating(content.substr(firadd+1));
    }
    var firadd=content.indexOf("/");
    if(firadd>-1){
    return caculating(content.substr(0,firadd))/caculating(content.substr(firadd+1));
    }
    if(firadd==-1){
    return eval(content);
    }
}
function putout(){
    result.innerText=caculating(result.innerText)
}
caculate.addEventListener("click",putout);