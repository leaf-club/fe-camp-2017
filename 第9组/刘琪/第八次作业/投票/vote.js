var 
    items=document.getElementsByClassName('item');
    columns=document.getElementsByClassName('column'),
    pics=document.getElementsByClassName('pic'),
    amounts=document.getElementsByClassName('amount'),
    h=new Array();
for(var i=0;i<pics.length;i++){
    items[i].index=i;
    pics[i].index=i;
    h[i] =columns[i].clientHeight;
    items[i].onmouseover=function(){
        amounts[this.index].style.display='block';
        amounts[this.index].style.bottom=50+h[this.index]+'px';
        amounts[this.index].innerHTML=h[this.index];
    }
    items[i].onmouseout=function(){
        amounts[this.index].style.display='none';
    }
    pics[i].onclick=function(){
        // h =columns[this.index].clientHeight;
        h[this.index]++;
        columns[this.index].style.height=h[this.index]+'px';
        amounts[this.index].style.bottom=50+h[this.index]+'px';
        amounts[this.index].innerHTML=h[this.index];
    }
}

