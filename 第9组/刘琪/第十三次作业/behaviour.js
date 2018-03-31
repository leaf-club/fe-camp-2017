function ModalFrame(){
  var bt0=document.getElementById("go"),
      bt1=document.getElementById("confirmed"),
      bt2=document.getElementById("cancel");
  var mf=document.getElementById("modalFrame");
  this.goModalFrame=function(){
    bt0.addEventListener("click",function(){
      mf.className="show";
    });
    bt1.addEventListener("click",function(){
      mf.className="hide";
    });
    bt2.addEventListener("click",function(){
      mf.className="hide";
    });
  }
//monitor the click-event.
  //bt.addEventListener("click",goModalFrame);//为什么报错goModalFrame是未定义的
}
modalFrame1=new ModalFrame();
modalFrame1.goModalFrame();