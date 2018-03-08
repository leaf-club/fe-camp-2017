//画布类构造函数
function app(id){
this.canvas=document.getElementById(id);
this.context=this.canvas.getContext("2d");
}
app.prototype={
    //画布的宽和长
    init:function(){
        let el = document.querySelector(".all-canvas");
		let canvasWidth = (el.currentStyle ? el.currentStyle : window.getComputedStyle(el, null)).width;
		let canvasHeight = (el.currentStyle ? el.currentStyle : window.getComputedStyle(el, null)).height;
		canvasWidth = parseFloat(canvasWidth);
		canvasHeight = parseFloat(canvasHeight);
		canvasWidth = canvasWidth < 640 ? canvasWidth : canvasHeight;
		document.querySelector(".whole").style.width = canvasWidth + "px";
		WIDTH = canvasWidth;
		HEIGHT = canvasHeight;
		CELL= Math.floor(WIDTH / 10);
		OUTRADIUS = CELL;
		INNERRADIUS = CELL * 0.5;
		PATHWIDTH = CELL * 0.3;
		this.canvas.width = canvasWidth;
		this.canvas.height = canvasHeight;
    },
    drawCircle:function(){
        var cir=new Circle();
        for(var i=0;i<3;i++){
            for(var j=0;j<3;j++){
                cir.draw(this.context,CELL * 2 + CELL * 3 * j, CELL * 2 +CELL * 3 * i, OUTRADIOUS,"black");
            }
        }
    },
    drawPath:function(pointarr){
      var cir=new Circle();
      var line=new Line();
      cir.drawSolid(this.context,pointarr[0].x,pointarr[0].y,INNERRADIOUS,"black");
      for(var i=0;i<pointarr.length-1;i++){
        line.drawLine(this.context,pointarr[i].x,pointarr[i].y,pointarr[i].x,pointarr[i].y,"white");
        cir.drawSolid(this.context,pointarr[i+1].x,pointarr[i+1].y,INNERRADIOUS,"black");
      }
    },
    //颜色改变
    errorPath:function(pointarr){
        var cir=new Circle();
        var line=new Line();
        cir.drawSolid(this.context,pointarr[0].x,pointarr[0].y,INNERRADIOUS,"red");
        for(var i=0;i<pointarr.length-1;i++){
          line.drawLine(this.context,pointarr[i].x,pointarr[i].y,pointarr[i].x,pointarr[i].y,"red");
          cir.drawSolid(this.context,pointarr[i+1].x,pointarr[i+1].y,INNERRADIOUS,"red");
        }
    },
    clearPath(startX, startY, width, height) {
		this.context.clearRect(startX, startY, width, height);
	}
}