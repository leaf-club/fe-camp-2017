var number=document.getElementsByClassName("number");
var circle=document.getElementsByClassName("circle");
var tip = document.getElementById("tips");
var del = document.getElementById("del");
// 初始密码
var code = new Array(1, 2, 3, 4, 5, 6);
var j = 0;
// 定义数组arr储存每次输入的值
var arr=new Array;
for(var i = 0; i < 10; i++){
    // #num[i]前面的空格也算一个节点
    number[i].firstChild.nextSibling.addEventListener('click', function(){
        //获取按键的值
        arr[j] =this.innerText;
        // 按键盘后数字变色
        this.style.color="red";
        btn(j);
        j++;
        if(j==6){
            j=0;
            // 判断密码是否正确
            for(var k=0; k<6; k++){
                if(arr[k]==code[k]){
                    if(k==5){
                        //提示解锁成功  
                        tip.innerHTML="right code";
                        document.getElementById("action").style.display = "none";
                        document.getElementById("footer1").style.display = "none"; 
                        document.getElementById("show1").style.display = "none";                           
                    } 
                }
                else{
                    //若密码错误则提示并退出判断
                    tip.innerHTML="wrong"; 
                    setTimeout("tip.innerHTML='Touch ID or Enter passcode'", 1000 );
                    break;
                }
            }
            for(var i=0; i<6; i++){
                circle[i].style.background="#bcbcbc";
            }
        }
    })
}
// 按键后圆圈变色
function btn(i){
        circle[i].style.background="#868686";
}
// 鼠标移开后键盘数字恢复颜色
function col(b){
    b.style.color = "#ffffff";
}
// 鼠标移动到删除键时数字变色
function bac(b){
    b.style.color = "#868686";
}
// 删除事件
del.addEventListener('click',function(){
    this.style.color = "red";
    circle[j-1].style.background="#bcbcbc";
    j--;
    if(j<0){
        j=0;
    }
})

