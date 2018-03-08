//类构造函数,用于改变提示文字以及单选框的转换
function Dom(){
    this.words=document.querySelector(".word p");
    this.radio=document.querySelectorAll(".rear input");
}
Dom.prototype={
    changeText:function(content){
        this.words.innerText=content;
    },
    getRadioOrder:function(){
       var num=-1;
        for(var i=0;i<this.radio.length;i++){
           if(this.radio[i].checked===true){
             num=i;  
            break;
           }
       }
       return num;
    }
}