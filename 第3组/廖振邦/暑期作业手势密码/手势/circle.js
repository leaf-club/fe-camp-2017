function Circle(){
   
};
Circle.prototype={
    draw:function(ctx,x,y,radious,color){
        ctx.strokeStyle=color;
        ctx.beginPath();
        ctx.arc(x,y,radious, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
    },
    drawSolid:function(ctx,x,y,radious,color){
        ctx.fillStyle=color;
        ctx.beginPath();
        ctx.arc(x,y,radious, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
}