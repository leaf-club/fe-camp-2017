var nums= document.getElementsByClassName("num");
var del= document.getElementById("delect");
var emergency=document.getElementById("emergency");
var dots= document.getElementsByClassName("dot");
var pic= document.getElementById("back_pic");
var input_wrong=document.getElementById("input_wrong")
var password="";
localStorage.password="123456";
// 本地储存密码
// 删除功能
del.onmousedown=function(){
    password=password.substring(0,password.length-1);
    dots[password.length].style.animation="grayer 0.2s linear 1 forwards"
}
del.onmouseover=function(){
    del.style.animation="darker 0.2s linear 1 forwards"
}
del.onmouseout=function(){
    del.style.animation="lighter 0.2s linear 1 forwards"
}
emergency.onmouseover=function(){
    emergency.style.animation="darker 0.2s linear 1 forwards"
}
emergency.onmouseout=function(){
    emergency.style.animation="lighter 0.2s linear 1 forwards"
}
// 输入密码，验证密码
for(var i=0;i<nums.length;i++)
{
    nums[i].onmouseover=function(){
        this.style.animation="darker 0.2s linear 1 forwards"
    }
    nums[i].onmouseout=function(){
        this.style.animation="lighter 0.2s linear 1 forwards"
    }
     nums[i].onmousedown=function(){
         password=password+this.id;
         input_wrong.style.display="none";
         dots[password.length-1].style.animation="whiter 0.2s linear 1 forwards"
         if(password.length==6)
         {
            if(password=="123456"){
               setTimeout(function(){ pic.style.zIndex="10";
               pic.style.animation="clearer 0.3s ease 1 forwards"},100)
            }
            else{
                input_wrong.style.display="block";
                password="";
                for(var j=0;j<dots.length;j++){
                    dots[j].style.animation="grayer 0.2s linear 1 forwards"
                }
            }
         }
     }
}