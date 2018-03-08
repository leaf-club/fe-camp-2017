function Util() {
}
Util.prototype = {
    calcDistance: function (startX, startY, endX, endY) {
        let x1 = parseFloat(startX);
        let y1 = parseFloat(startY);
        let x2 = parseFloat(endX);
        let y2 = parseFloat(endY);
        let result = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        return result;
    },
    //判断是否接触某一点
    isTouched: function (x, y) {
        //9个点的坐标
        var point = {};//对象"点"
        var pointarr = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let point={};
                point.x = CELL * 2 + CELL * 3 * j;
                point.y = CELL * 2 + CELL * 3 * i;
                pointarr.push(point);
                console.log(point.x);
                
                console.log(pointarr);
            }
        }
        //判断是否接触
        for (var i = 0; i < 9; i++) {
            var result=this.calcDistance(x, y,pointarr[i].x,pointarr[i].y);
           if(result<=OUTRADIOUS){
            point.x=pointarr[i].x;
            point.y=pointarr[i].y;
            return point;
           }
        }
        return null;
    },
    //把点转换成数字密码,便于储存和提取,返回相应数字
    pointToPwd:function(point){
      var x=point.x,y=point.y;
      var pwd=0;
      var numst=x+""+y;
      var one = CELL * 2 + "" + CELL* 2;
      var two = CELL * 5 + "" + CELL * 2;
      var three = CELL * 8 + "" + CELL * 2;
      var four = CELL * 2 + "" + CELL * 5;
      var five = CELL * 5 + "" + CELL * 5;
      var six = CELL * 8 + "" + CELL * 5;
      var seven = CELL * 2 + "" + CELL * 8;
      var eight = CELL * 5 + "" + CELL * 8;
      var nine = CELL * 8 + "" + CELL * 8;
      switch(numst){
          case one:
          {
             pwd=1;
             break;
          }
          case two:
          {
             pwd=2;
             break;
          }
          case three:
          {
             pwd=3;
             break;
          }
          case four:
          {
             pwd=4;
             break;
          }
          case five:
          {
             pwd=5;
             break;
          }
          case six:
          {
             pwd=6;
             break;
          }
          case seven:
          {
             pwd=7;
             break;
          }
          case eight:
          {
             pwd=8;
             break;
          }
          case nine:
          {
             pwd=9;
             break;
          }
          default:break;
      }
      return pwd;
    },
    //把点数组转换成数字数组
    pointarrToNumarr:function(pointarr){
       var ret=[];
       for(var i=0;i<pointarr.length;i++){
           ret.push(this.pointToPwd(pointarr[i]));
       }
       return ret;
    }
}