
var password=new Array(1,1,0,8,8,8);//设定的密码
var enter=new Array();//记录输入的密码
var n=0;//记录按键的次数,用于圆圈变色索引
var $a=$('.circle');//圆圈集合
var $tip=$('.tip');//提示
var $cancel=$('#cancel');//删除一次输入

localStorage.setItem('password','110888');

//移动端touch事件需要用on事件绑定
// $('.number').on('touchstart',function(e){
//     $(this).css('background','#ddd');
//     var p=$(this).html();
//     //圆圈
//     n++;
//     circleChange();
//     //密码没输入完，继续获取
//     if(enter.length<6){//这里有点奇怪，数组长度小于6，数组长度才等于6
//         $tip.text('Touch ID or Enter Password');
//         enter.push(p);
//         console.log(enter);
//     }
// })
$('.number').mousedown(function(){
    $(this).css('background','#ddd');
    var p=$(this).html();
     //圆圈
    n++;
    circleChange();
    //密码没输入完，继续获取
    if(enter.length<6){//这里有点奇怪，数组长度小于6，数组长度才等于6
        $tip.text('Touch ID or Enter Password');
        enter.push(p);
        console.log(enter);
    }
})
//移动端
// $('.number').on('touchend',function(e){
//     $(this).css('background','transparent');
//     //密码输入完成，抬起后检查密码
//     if(n==6){
//         vertify();
//     }
// })
$('.number').mouseup(function(){
    $(this).css('background','transparent');
    //密码输入完成，抬起后检查密码
    if(n==6){
        vertify();
    }
})
//删除一位
//移动端
// $cancel.on('touchend',del);
$cancel.click(del);//用DOM对象或jquery对象都可以
//圆圈变色
function circleChange(){
    $a.eq(n-1).css('background','#fff');
}
//检查密码
function vertify(){
    // if(password.toString()==enter.toString()){  //toString()将数组转换为逗号分隔开的字符串
    if(localStorage.getItem('password')==enter.join('')){//join()同toString，但是可选择无间隔符join('')
        console.log(enter.toString());
        //alert('Welcome!');
        $tip.text('Welcome');//用DOM对象tip.text('')或jQuery对象$tip.text('')都可以
        reset();
    }else{
        //alert('Password Wrong!');
        $tip.text('!!!!!!Wrong!!!!!!');
        reset();
    }
}
//重置
function reset(){
    enter=[];
    n=0;
    $a.each(function(){$(this).css('background','transparent')});
}
//删除
function del(){
    if(n>0){//n>0防止n为负数
        enter.pop();//删除输入密码数组的最后一项
        $a.eq(n-1).css('background','transparent');//将最近一次的圆圈恢复透明
        n--;
    }
}






// var circles=document.getElementsByClassName('circle'),
//     numbers=document.getElementByClassname('numbers');
//for(var i=0;i<numbers.length;i++){
//     numbers[i].onclick=function(){this.style.animation='click 0.2s';};
// }
//上面这样写，按按键只有一次动画效果

// function touch(){
//     for(var i=0;i<numbers.length;i++){
//         numbers[i].onclick=function(){this.style.animation='click 0.2s';};
//     }
// }
// touch(); 问题同上！！！！

// for(var i=0;i<numbers.length;i++){
//     numbers[i].addEventListener('click',function(){
//         this.style.animation='click 0.2s';
//     })
// }问题同上！！！！！！！

//下面用事件托管也是同样的问题！！！！
// var circles=document.getElementsByClassName('circle'),
//     numbers=document.getElementByClassname('numbers');
// number.onclick=function(ev){
//     var ev=ev || window.event;
//     var target=ev.target || ev.srcElement;
//     if(target.nodeName.toLocaleLowerCase()=='div'){
//         switch(target.id){
//             case 'number1':
//                 target.style.animation='click 0.2s';
//                 break;
//             case 'number2':
//                 target.style.animation='click 0.2s';
//                 break;
//             case 'number3':
//                 target.style.animation='click 0.2s';
//                 break;
//             case 'number4':
//                 target.style.animation='click 0.2s';
//                 break;
//             case 'number5':
//                 target.style.animation='click 0.2s';
//                 break;
//             case 'number6':
//                 target.style.animation='click 0.2s';
//                 break;
//             case 'number7':
//                 target.style.animation='click 0.2s';
//                 break;
//             case 'number8':
//                 target.style.animation='click 0.2s';
//                 break;
//             case 'number9':
//                 target.style.animation='click 0.2s';
//                 break;
//             case 'number0':
//                 target.style.animation='click 0.2s';
//                 break;
//         }
//     }
// }

//以下使用jquery,问题同上
// $('.number').click(function(){
//     $(this).css('animation','click 0.2s');
// })