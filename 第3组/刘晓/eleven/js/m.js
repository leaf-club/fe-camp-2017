$(function(){

var input_value;// =$("#bb").val() ;

  $("#aa").click(lala);

  function lala(){

      var mm=$("#bb").val()+"",ff;
      var size=0;
      ff=mm.replace('-','');
      size=mm.length;
      ff=ff.toUpperCase();

      var arr=mm.split(",");
      var tu=new Array;
      var o;
      tu[0]=arr[0];

      //去重
      for(var i=0;i<arr.length;i++){
        for(o=0;o<tu.length;o++){
          if(arr[i]==tu[o]){
              o=0;
              break;}

        } 
            if(tu.length==o&&arr[i]!=tu[o]){
            tu[o]=arr[i];
      }
    }

    //日期
    function day(date,daysBefore){
      var o = new Object();
      o.date=new Date(date);
      o.daysBefore = daysBefore;
      o.say = function(){
        console.log(this.date);
      }
      return o;
    }
    var da=new Array;
    var daa=day('2017/2/1',0);
  
    for(var g=0;g<=5;g++){
      da[g]=day(daa.date.getDate()+7*g,daa.daysBefore+7*g)
    }
    for(g=0;g<=5;g++){
      console.log(da[g]);
    }
    /*
            //日期，在原有日期基础上，增加days天数，默认增加1天
            function addDate(date, days) {
              if(days == undefined || days == '') {
                  days = 1;
              }
              var date = new Date(date);
              date.setDate(date.getDate() + days);
              var month = date.getMonth() + 1;
              var day = date.getDate();
              var mm = "'" + month + "'";
              var dd = "'" + day + "'";
              
              //单位数前面加0
              if(mm.length == 3) {
                  month = "0" + month;
              }
              if(dd.length == 3) {
                  day = "0" + day;
              }

              var time = date.getFullYear() + "-" + month + "-" + day
              return time;
          }
          var addTime = addDate("2017-07-24", 2);
          console.log(addTime);//2017-07-26
          */



      console.log(tu);
      console.log(ff);
      console.log(size);
      if(size!=20){

        console.log("错误,不满20位字母");
      }
        }


});

