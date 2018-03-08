function Line(){
}
Line.prototype={
    drawLine:function(ctx,startx,starty,endx,endy,color){
     ctx.beginPath();
     ctx.moveTo(startx,starty);
     ctx.lineTo(endx,endy);
     ctx.strokeStyle=color;
     ctx.stroke();
     ctx.closePath();
    }
}