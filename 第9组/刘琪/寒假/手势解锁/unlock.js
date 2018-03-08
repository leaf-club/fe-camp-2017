var canvas0=document.getElementById('canvas0'),//底层背景canvas,绘制九个按钮圆形轮廓
    canvasPL=document.getElementById('canvasPL'),//绘制折线
    canvas1=document.getElementById('canvas1');//绘制路径经过的小圆
    setPWD=document.getElementById('setPWD');//设置密码
    alterPWD=document.getElementById('alterPWD');//修改密码
    tip=document.getElementById('tip');
var bigRadius=25,//按钮大圆轮廓半径
    littleRadius=10;//选中时的小圆半径
var start=false,//设置标识，保证mousemove发生在mousedown之后
    first=true;//区别第一个小圆
    setPwdFlag=false;//true表示处于设置密码状态
    alterPwdFlag=false;//true表示处于修改密码状态
    pwdConfirmed=false;//表示修改密码时候是否验证了密码
    n=0;//记录设置密码和修改密码时输入的次数
var password=[0,1,2,4,6,7,8];//默认密码，形状为Z
var num=[];//记录依次绘制的小圆对应的圆心点在数组中的索引
var temp=[];//num的临时变量

if(canvas0.getContext&&canvasPL.getContext&&canvas1.getContext){
  var ctx0=canvas0.getContext('2d'),
      ctxPL=canvasPL.getContext('2d'),
      ctx1=canvas1.getContext('2d');
}
//定义Point点对象
function Point(x,y){
  this.x=x;
  this.y=y;
  this.flag=false;//flag为false时表示该位置没有绘制小圆
}
Point.prototype={
  constructor:Point,
  createBigCircle:function(){
    ctx0.beginPath();
    ctx0.arc(this.x,this.y,bigRadius,0,Math.PI*2,true);
    ctx0.stroke();
  },
  createLittleCircle:function(){
    ctx1.beginPath();
    ctx1.arc(this.x,this.y,littleRadius,0,Math.PI*2,true);
    ctx1.fill();
  }
}
//在底层背景上创建数组包含九个点
var points=new Array();
points[0]=new Point(70,70);
points[1]=new Point(150,70);
points[2]=new Point(230,70);
points[3]=new Point(70,150);
points[4]=new Point(150,150);
points[5]=new Point(230,150);
points[6]=new Point(70,230);
points[7]=new Point(150,230);
points[8]=new Point(230,230);
//绘制九个大轮廓圆
function createBigCircles(){
  for( var i=0;i<points.length;i++){
    points[i].createBigCircle();
  }
}
//绘制小圆，并将该大圆标记，同时给num数组push该圆索引值
function drawLittleCircle(i){
  if(points[i].flag==false){
    points[i].createLittleCircle();
    points[i].flag=true;//表示该圆已经绘制过小圆
    num.push(i);
  }
}
//判断鼠标位置在哪个圆中，并绘制小圆
function countDrawLittleCircle(x,y,a,first){
  //判断鼠标位置在哪个圆中
  for(var i=0;i<points.length;i++){
    var dx=points[i].x-x,
        dy=points[i].y-y,
        dx2=Math.pow(dx,2),
        dy2=Math.pow(dy,2),
        d=Math.sqrt(dx2+dy2);//鼠标位置与圆心的距离
    if((points[i].flag==false)&&(d<bigRadius)){
      //即在大圆范围内，在canvas1上绘制小圆
      drawLittleCircle(i);
      break;
    }
    if(first==false){
      b=Math.abs(i-a);//记录上一个索引值与下一个索引值的差值,取绝对值
      //边界上的圆自动锁定，从而不会漏掉一个数值
      borderChooseCircle(a,b,x,y);
    }
  }
}
//点击第一个圆时调用的函数
function pointDis(event){
  start=true;
  first=true;
  var a=0;
  var x=event.clientX-canvas0.getBoundingClientRect().left,//获取鼠标位置在canvas中的坐标
      y=event.clientY-canvas0.getBoundingClientRect().top;
  countDrawLittleCircle(x,y,a,first);
}
//鼠标在边界上，自动选中，a表示最新选中按钮的索引值，b表示a与i的差值。二者用来标识下一个
//按钮与当前按钮在同一行或同一列。
function borderChooseCircle(a,b,x,y){
  var odx=x-points[a].x,
      ody=y-points[a].y;//鼠标位置与最新一个绘制的圆心的距离
  //在边界上，如第一行，从第一个开始若移动过程中横坐标大于第二个圆心横坐标，则选中该圆
  if(b<3){
    //说明上一个点与下一个点在同一行
    if(a<3){
      //上一点在第一行
      if((odx>80)&&(ody<0)){//向右走
        drawLittleCircle(a+1);
      }else if((odx<-80)&&(ody<0)){//向左走
        drawLittleCircle(a-1);
      }
    }else if(a>5){
      //上一点在第三行
      if((odx>80)&&(ody>0)){//向右走
        drawLittleCircle(a+1);
      }else if((odx<-80)&&(ody>0)){//向左走
        drawLittleCircle(a-1);
      }
    }
  }else if(b%3==0){
    //说明上一个点与下一个点在同一列
    if(a%3==0){
      //上一个点在第一列
      if((ody>80)&&(odx<0)){//向下走
        drawLittleCircle(a+3);
      }else if((ody<-80)&&(odx<0)){//向上走
        drawLittleCircle(a-3);
      }
    }else if((a-2)%3==0){
      //上一个点在第三列
      if((ody>80)&&(odx>0)){//向下走
        drawLittleCircle(a+3);
      }else if((ody<-80)&&(odx>0)){//向上走
        drawLittleCircle(a-3);
      }
    }
  }
}
//鼠标移动绑定的函数
function mouseMove(event){
  if(start){//mousedown之后才触发mousemove
    var a=num[num.length-1];//记录上一个点的索引值
        first=false;
    var x=event.clientX-canvas0.getBoundingClientRect().left,
        y=event.clientY-canvas0.getBoundingClientRect().top;
    //绘制小圆
    countDrawLittleCircle(x,y,a,first);
    //绘制折线
    drawLine(x,y,a);
  }
}
//for语句，依次连接圆心，绘制实心小圆
function linkPoints(){
  ctxPL.clearRect(0,0,canvasPL.width,canvasPL.height);
  for(var i=0;i<num.length;i++){
    var n=num[i];
    var m=num[0];
    if(num.length>1&&i>0){
      m=num[i-1];
    }
    ctxPL.beginPath();
    ctxPL.moveTo(points[m].x,points[m].y);
    ctxPL.lineTo(points[n].x,points[n].y);
    ctxPL.stroke();
  }
}
//绘制折线
function drawLine(x,y,a){
  linkPoints();
  //绘制伸出端线条
  ctxPL.beginPath();
  ctxPL.moveTo(points[a].x,points[a].y);
  ctxPL.lineTo(x,y);
  ctxPL.closePath();
  ctxPL.stroke();
}
//设置密码标识
function setPassword(){
  setPwdFlag=true;
  alterPwdFlag=false;
  tip.innerHTML='请输入密码！';
}
//修改密码标识
function alterPassword(){
  setPwdFlag=false;
  alterPwdFlag=true;
  tip.innerHTML='请输入原密码';
}
//普通状态标识
function normal(){
  setPwdFlag=false;
  alterPwdFlag=false;
}
//清除小圆圈和直线
function clearFlag(){
  ctxPL.clearRect(0,0,canvasPL.width,canvasPL.height);
  ctx1.clearRect(0,0,canvas1.width,canvas1.height);
  for(var i=0;i<num.length;i++){
    points[num[i]].flag=false;
  }
}
//设置密码状态时的mouseup
function setPwdState(){
  if(n==0){return false;}
  if(num.length<6&&n==1){//第一次输入完成，但少于6位
    tip.innerHTML='密码不少于6位！';
    //清除折线和小圆,清空num
    clearFlag();
    num=[];
    n=0;
  }
  if(num.length>=6&&n==1){//第一次输入完成，且大于6位
    tip.innerHTML='请再次输入密码！';
    clearFlag();
    temp=num;
    num=[];
  }
  if(num.length<6&&n==2){
    tip.innerHTML='设置失败，密码不少于6位，请重新设置';
    clearFlag();
    temp=[];
    num=[];
    n=0;
  }
  if(num.length>=6&&n==2){//第二次输入完成，且大于6位
    //如果两次输入相同，则密码设置成功
    if(temp.toString()==num.toString()){//比较两个数组元素相等
      tip.innerHTML='密码设置成功,请输入新密码解锁';
      clearFlag();
      password=temp;
      temp=[];
      num=[];
      n=0;
      setPwdFlag=false;
      alterPwdFlag=false;
    }else{
    //如果两次输入不同，则密码设置失败
      tip.innerHTML='密码设置失败，请重新设置';
      clearFlag();
      temp=[];
      num=[];
      n=0;
    }
  }
}
//修改密码状态时的mouseup
function alterPwdState(){
  if((num.toString()==password.toString())&&(n==1)){
    //密码正确！
    tip.innerHTML='密码正确，请输入新密码';
    //一些数据标识初始化
    clearFlag();
    pwdConfirmed=true;
    n=0;
    num=[];
  }else if((num.toString()!=password.toString())&&(!pwdConfirmed)){
    //密码验证错误，!pwdConfirmed避免影响到后面设置密码
    tip.innerHTML='密码错误，请重新输入';
    clearFlag();
    n=0;
    num=[];
  }
  if(pwdConfirmed){
      //密码验证成功，设置新密码。
      setPwdState();
  }
}
//正常状态时的mouseup
function normalState(){
  if(num.toString()==password.toString()){//密码正确
    tip.innerHTML='密码正确，开机！！！';
    clearFlag();
    n=0;
    num=[];
  }else if(num.toString()!=password.toString()){//密码错误
    tip.innerHTML='密码错误，请重新输入！';
    clearFlag();
    n=0;
    num=[];
  }
}
//mouseup调用的函数
function mouseUp(){
  start=false;
  first=true;
  n++;
  if(setPwdFlag&&(!alterPwdFlag)){//处于设置密码状态时
    setPwdState();
  }else if((!setPwdFlag)&&alterPwdFlag){//处于修改密码状态时
    alterPwdState();
  }else if((!setPwdFlag)&&(!alterPwdFlag)){//处于正常使用状态时
    //验证密码是否正确，若正确，则开机；若错误，则提醒
    normalState();
  }
  console.log(password);
}

//如果为canvas0添加事件，则由于它处于底层而不会被触发
canvas1.addEventListener('mousedown',pointDis);
//鼠标移动，绘制折线
canvas1.addEventListener('mousemove',mouseMove);
//鼠标抬起，
canvas1.addEventListener('mouseup',mouseUp);
//点击设置密码按钮，进入设置密码状态
setPWD.addEventListener('click',setPassword);
//点击修改密码按钮，进入修改密码状态
alterPWD.addEventListener('click',alterPassword);

createBigCircles();