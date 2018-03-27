//变量初始化
var canvas1=document.getElementById('canvas1'),//画布
    sB=document.getElementById('set_btn'),
    cB=document.getElementById('change_btn'),
    remind=document.getElementById('remind');//提示框
var Rb=26,Rs=10,offsetX=50,offsetY=50;//基本参数
var password=[1,3,4,6,7];//初始密码
var sign=1,//标识味用于判断是处于判断解锁状态还是密码设置状态
    flag=1;//标识设置密码时的状态
var cxt1=canvas1.getContext('2d'),
    interX=(400-2*offsetX-Rb*2*3)/2,
    interY=(400-2*offsetY-Rb*2*3)/2;
var PointArr=calculatePoint(interX,interY),//储存九个点的坐标
    linePoint=[];//储存位于折线上点的序号
var pw=[];//设置密码时储存第一次输入的密码
canvas1.width=400;
canvas1.height=400;
function calculatePoint(x,y){//计算圆心坐标
    var Re=[];//用于保存点
    for(var row=0;row<3;row++)
        for(var col=0;col<3;col++){
            var _Point={
                X:(offsetX+col*x+(col*2+1)*Rb),
                Y:(offsetY+row*y+(row*2+1)*Rb),
            };
            Re.push(_Point);
        }
    return Re;
}
function createBigcir(cxt,aaa){//画大圆
    for(var i=0;i<aaa.length;i++){
        var _Point=aaa[i];
        cxt.fillStyle = "black";
        cxt.beginPath();
        cxt.arc(_Point.X, _Point.Y,Rb,0,Math.PI*2,true);
        cxt.closePath();
        cxt.fill();
        cxt.fillStyle = "#ffffff";
        cxt.beginPath();
        cxt.arc(_Point.X, _Point.Y,Rb-3,0,Math.PI*2,true);
        cxt.closePath();
        cxt.fill();
    }
}

function createSmallcir(cxt,_Point){//画小圆
    cxt.fillStyle = "black";
    cxt.beginPath();
    cxt.arc(_Point.X, _Point.Y,Rs,0,Math.PI*2,true);
    cxt.closePath();
    cxt.fill();
}
function begin(event){//获取鼠标位置
    var mouseX=event.clientX-canvas1.getBoundingClientRect().left,
        mouseY=event.clientY-canvas1.getBoundingClientRect().top;
    isPointSelect(mouseX,mouseY);
}
function isPointSelect(mouseX,mouseY){//检验是否选中
    for(var i=0;i<PointArr.length;i++){
        var cPoint=PointArr[i],
            dx=Math.abs(cPoint.X-mouseX),
            dy=Math.abs(cPoint.Y-mouseY),
            s=Math.pow((dx*dx+dy*dy),0.5);
        if (s<Rb*1.5){
            if(linePoint.indexOf(i)===-1){//防止重复选取
                linePoint.push(i);
                createSmallcir(cxt1,PointArr[i]);
            }
        }
    }
}
function connect(){//重绘时连接已经选中过点的和小圆 
    for(var j=0;j<linePoint.length;j++){//小圆
            createSmallcir(cxt1,PointArr[linePoint[j]]);
        }
    if(linePoint.length>1){ //折线
        for(var i=0;i<linePoint.length-1;i++){
            cxt1.beginPath();
            cxt1.lineWidth = 10;
            cxt1.strokeStyle = "black";
            cxt1.moveTo(PointArr[linePoint[i]].X,PointArr[linePoint[i]].Y);
            cxt1.lineTo(PointArr[linePoint[i+1]].X,PointArr[linePoint[i+1]].Y);
            cxt1.stroke();
            cxt1.closePath();
        }
    }
}
function drawLine(event){//移动时画线
    event.preventDefault();
    if(linePoint.length){
        var lastPointIndex=linePoint[linePoint.length-1],
            lastPoint=PointArr[lastPointIndex];
        var mouseX=event.clientX-canvas1.getBoundingClientRect().left,//获取鼠标位置
            mouseY=event.clientY-canvas1.getBoundingClientRect().top;
        cxt1.clearRect(0,0,canvas1.width,canvas1.height);//清空画布
        createBigcir(cxt1,PointArr);//重绘大圆
        connect();
        cxt1.beginPath();
        cxt1.lineWidth = 10;
        cxt1.strokeStyle = "black";
        cxt1.moveTo(lastPoint.X,lastPoint.Y);
        cxt1.lineTo(mouseX,mouseY);
        cxt1.stroke();
        cxt1.closePath();
        isPointSelect(mouseX,mouseY);
    }
}

function check(){//验证函数
    if(sign){
        if(linePoint.toString()==password.toString()){
            remind.innerHTML='恭喜解锁成功！';
    }
        else {remind.innerHTML='密码错误！请重新输入';}
    }
    else {switch(flag){
        case (1):  if(linePoint.length>4){
                        remind.innerHTML='请确认密码！';
                        pw=linePoint;
                        flag=2;
                    console.log(pw);}
                    else {remind.innerHTML='密码要不少于五个点啊！！！！';}
            break;
        case (2): console.log(pw);
                if(linePoint.toString()===pw.toString()){
                    remind.innerHTML='密码设置成功';
                    password=pw;
                    flag=1;
                    sign=1;
                    sB.style.backgroundColor='#fff'; 
                    cB.style.backgroundColor='#fff';   
                }
                else {
                    remind.innerHTML='两次输入不一致,请重新设置！';
                    flag=1;
            }
            break;
        case (3): 
            if(linePoint.toString()===password.toString()){
                setPwd();
                flag=1;
                cB.style.backgroundColor='#fff';
            }
            else {remind.innerHTML='密码错误！请重新输入';}
            break;
        }
    }
    cxt1.clearRect(0,0,canvas1.width,canvas1.height);
    createBigcir(cxt1,PointArr);
    linePoint=[];
}
function setPwd(){//设置密码
    sB.style.backgroundColor='#d6d5d5';
    remind.innerHTML='请设置密码（不少于五个点）';
    sign=0;
    flag=1;
}
function changePwd(){ //修改密码
    cB.style.backgroundColor='#d6d5d5';
    remind.innerHTML='请输入原密码';
    sign=0;
    flag=3;
}
createBigcir(cxt1,PointArr);
sB.addEventListener('click',setPwd);
cB.addEventListener('click',changePwd);
canvas1.addEventListener('mousedown',begin);
canvas1.addEventListener('mousemove',drawLine);
canvas1.addEventListener('mouseup',check);