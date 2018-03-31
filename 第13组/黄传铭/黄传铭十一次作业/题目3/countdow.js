/*.要求实现一个函数，返回一个数组，内容是2018年4月
的每个星期三是4月几号、它们距离今天还有几天。
*/
var countDown = function() {
    let myarr = [];
    for(var i = 1; i < 31; i++){
        let tempdate = new Date();
        let now = new Date();
        let myarr1 = {};
        tempdate.setFullYear(2018, 3, i);
        if(tempdate.getDay() == 3){
            myarr1.date = '2018/4/'+i;
            myarr1.daysBefore = Math.floor((tempdate.getTime() - now.getTime()) / 1000 / 3600 / 24);
            myarr.push(myarr1);
            console.log(myarr);
        }
        
    }
    alert(JSON.stringify(myarr)); 
};
 countDown();
