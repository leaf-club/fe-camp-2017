var btn=document.getElementsByClassName('btn'),
    inp=document.getElementById('inp');
    var myarray=new Array();
//给button添加点击事件
for(var i=0;i<btn.length;i++){
    btn[i].onclick=function(){
        //数字 点
        if(!isNaN(this.value)||this.value=='.')        
         {inp.value+=this.value;
            myarray=inp.value;}
        //操作符
        else switch(this.value){
            case('='):{ myarray=inp.value;
                        if(myarray!="")inp.value=eval(myarray);
                        myarray='';
                        break;}
            //全部清空
            case('C'):{myarray='';inp.value='';break;}
            //删除最后一位
            case('←'):{inp.value=inp.value.substring(0,inp.value.length-1);break;}
            //相反数 屏幕无内容时按无效
            case('+/-'):{if(inp.value!='')inp.value=-inp.value;break}
            case('^2'):{if(inp.value!='')inp.value=inp.value*inp.value;break;}
            case('√'):{if(inp.value!='')inp.value=Math.sqrt(inp.value);break;}
            default:{//避免连按两下运算符导致无法计算
                    if(!isNaN(inp.value[inp.value.length-1])){
                        inp.value+=this.value;
                        myarray=inp.value;}
                    }
        }
    }
}
