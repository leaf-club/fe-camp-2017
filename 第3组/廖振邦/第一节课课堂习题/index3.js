//对方法不熟,
function week3(){  
    var olddate=new Date("2017,1,1");
    var newdate=new Date("2017,2,1");
   var nowdate=new Date();
    var b=[];
    
    for(var date2=olddate;date2<newdate;date2.getDate()++){
        if(date2.getDay()===2){
            b.push({
                date:date2.getFullYear()+"-"+(date2.getMonth()+1)+"-"+date2.getDate(),
                dayBefore:date-nowdate
            })
        }
    }
    console.log(b);
    
}
week3();