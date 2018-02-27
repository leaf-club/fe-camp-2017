//初始化变量
var canvas = document.getElementById("canvas");
var pwd = document.getElementById("mima");
var tip = document.getElementById("pwd");
var WIDTH = document.body.clientWidth;
var HEIGHT = document.body.clientHeight;
var MARGIN_LEFT = 1/6 * WIDTH;
var RADIUS = 2/27 * WIDTH;
tip.style.fontSize = 1/5 * (HEIGHT > WIDTH ? WIDTH:HEIGHT);
var STATUS,touchFlag = false,flag = false;
var positionArr1 = [],positionArr2 = [],positionArr = [],k = 3;

//进行判断是否可用canvas
window.onload = function(){
	if(canvas.getContext){

		var cxt = canvas.getContext("2d");

		canvas.width = WIDTH;
		canvas.height = HEIGHT;

		//创建圆心坐标数组
		var arr = drawcoord(MARGIN_LEFT,0);

		for(var i=0;i<9;i++){
			drawround(arr[i].x,arr[i].y,cxt);
		}

		canvas.addEventListener("touchstart",function(event){
			drawPointSituation(event,cxt);
		},false);

		canvas.addEventListener("touchmove",function(event){
			if(flag){
				drawLine(event,cxt,STATUS,arr);
			}
		},false);

		canvas.addEventListener("touchend",function(event){
			if(flag){
				flag = false;
				setTimeout(touchendSituation,500,cxt,STATUS);
			}			
		},false);
	
		pwd.addEventListener("touchstart",reSet,false);
	}
	else{
		alert("该浏览器不可用canvas");
	}

	//空心圆坐标
	function drawcoord(x,y){
		var render = [];
		for(var row=0;row<3;row++)
			for(var col=0;col<3;col++){
				var Point = {
					x: x + 2 * col * (RADIUS + 1/2 * RADIUS) + (RADIUS + 1/2 * RADIUS),
					y: y + 2 * row * (RADIUS + 1/2 * RADIUS) + (RADIUS + 1/2 * RADIUS)
				};
				render.push(Point);
			}
		return render;
	}

	//画空心圆
	function drawround(x,y,cxt){
		cxt.strokeStyle = "blue";
		cxt.lineWidth = 5;

		cxt.beginPath();
		cxt.arc(x,y,RADIUS,0,2*Math.PI);
		cxt.closePath();
		cxt.stroke();
	}

	//获取点击位置
	function getPosition(event){
		var rect = event.currentTarget.getBoundingClientRect();
		var touch = event.touches[0];
		var position = {
			x: touch.clientX - rect.left,
			y: touch.clientY - rect.top
		}
		return position;
	}

	//鼠标点击触发内部实心圆
	function drawPoint(i,cxt){
		cxt.fillStyle = "blue";

		cxt.beginPath();
		cxt.arc(arr[i].x,arr[i].y,1/2*RADIUS,0,2*Math.PI);
		cxt.closePath();
		cxt.fill();
	}

	//清空实心圆
	function clearPoint(i,cxt){
		cxt.fillStyle = "white";

		cxt.beginPath();
		cxt.arc(arr[i].x,arr[i].y,1/2*RADIUS,0,2*Math.PI);
		cxt.closePath();
		cxt.fill();
	}

	//鼠标点击触发内部实心圆点条件
	function drawPointSituation(event,cxt){
		touchFlag = true;
		var position = getPosition(event);
		for(var i=0;i<9;i++){
			X = Math.abs(position.x - arr[i].x);
			Y = Math.abs(position.y - arr[i].y);
			if(Math.sqrt(X * X + Y * Y) < RADIUS){
				flag = true;
				drawPoint(i,cxt);
				STATUS = i;
			}
			else{
				clearPoint(i,cxt);
			}
		}
	}

	//鼠标触发画线操作
	function drawLine(event,cxt,i,arr){
		clearLine(cxt);

		event.preventDefault();

		touchFlag = true;
		var position = getPosition(event);


		for(var j=0;j<9;j++){
			var X = Math.abs(position.x - arr[j].x);
			var Y = Math.abs(position.y - arr[j].y);
			if(Math.sqrt(X * X + Y * Y) < RADIUS){
				positionArr.push(j);
			}
		}

		var tryArr = clearRepeat(positionArr);

		cxt.lineWidth = 1/10*RADIUS;
		cxt.strokeStyle = "#2CFF26";
		cxt.beginPath();
		cxt.moveTo(arr[i].x,arr[i].y);
		if(positionArr.length !== 0){
			for(var j=0;j<positionArr.length;j++){
				if(positionArr.indexOf(positionArr[j]) == j){
					var XY = positionArr[j];
					cxt.lineTo(arr[XY].x,arr[XY].y);
				}
			}
		}
		cxt.lineTo(position.x,position.y);
		cxt.stroke();

		if(positionArr.length !== 0){
			for(var j=0;j<positionArr.length;j++){
				if(positionArr.indexOf(positionArr[j]) == j){
					var XY = positionArr[j];
					drawPoint(XY,cxt);
				}
			}
		}

		if(tryArr.length !== 0){
			for(var j=0;j<tryArr.length;j++){
				if(j+1 < tryArr.length ){
					if((tryArr[j] ==0 && tryArr[j+1] == 2)||(tryArr[j] ==2 && tryArr[j+1] == 0)){
						drawPoint(1,cxt);
					}
					else if((tryArr[j] ==3 && tryArr[j+1] == 5)||(tryArr[j] ==5 && tryArr[j+1] == 3)){
						drawPoint(4,cxt);
					}
					else if((tryArr[j] ==6 && tryArr[j+1] == 8)||(tryArr[j] ==8 && tryArr[j+1] == 6)){
						drawPoint(7,cxt);
					}
					else if((tryArr[j] ==0 && tryArr[j+1] == 6)||(tryArr[j] ==6 && tryArr[j+1] == 0)){
						drawPoint(3,cxt);
					}
					else if((tryArr[j] ==1 && tryArr[j+1] == 7)||(tryArr[j] ==7 && tryArr[j+1] == 1)){
						drawPoint(4,cxt);
					}
					else if((tryArr[j] ==2 && tryArr[j+1] == 8)||(tryArr[j] ==8 && tryArr[j+1] == 2)){
						drawPoint(5,cxt);
					}
					else if((tryArr[j] ==0 && tryArr[j+1] ==8)||(tryArr[j] ==8 && tryArr[j+1] == 0)){
						drawPoint(4,cxt);
					}
					else if((tryArr[j] ==2 && tryArr[j+1] == 6)||(tryArr[j] ==6 && tryArr[j+1] == 2)){
						drawPoint(4,cxt);
					}
				}
			}
		}
	}

	//保存之前状态
	function clearLine(cxt){
		cxt.clearRect(0,0,WIDTH,HEIGHT);//清楚当前区域

		for(var i=0;i<9;i++){
			drawround(arr[i].x,arr[i].y,cxt);
		}

		if(touchFlag){
			drawPoint(STATUS,cxt);
		}
	}

	//鼠标离开触发事件
	function touchendSituation(cxt,j){
		cxt.clearRect(0,0,WIDTH,HEIGHT);//清楚当前区域

		for(var i=0;i<9;i++){
			drawround(arr[i].x,arr[i].y,cxt);
		}

		positionArr = clearRepeat(positionArr);
		cxt.lineWidth = 1/10*RADIUS;
		cxt.strokeStyle = "blue";
		cxt.beginPath();
		cxt.moveTo(arr[j].x,arr[j].y);
		if(positionArr.length !== 0){
			for(var j=0;j<positionArr.length;j++){
				var XY = positionArr[j];
				cxt.lineTo(arr[XY].x,arr[XY].y);
			}
		}
		cxt.stroke();

		if(positionArr.length !== 0){
			for(var j=0;j<positionArr.length;j++){
				if(positionArr.indexOf(positionArr[j]) == j){
					var XY = positionArr[j];
					drawPoint(XY,cxt);
				}
			}
		}

		if(touchFlag){
			drawPoint(STATUS,cxt);
		}

		checkPassword(cxt);

	}

	//验证密码
	function checkPassword(cxt){
		if(positionArr1.length == 0){
			setPassword();
		}
		else if(positionArr2.length == 0){
			secondSet();
		}
		else{
			if(clearRepeat(positionArr).toString() === positionArr1.toString()){
				var password = document.getElementById("mima");
				password.style.display = "block";
				tip.innerHTML = "unlock successfully";
				change(cxt);
			}
			else{
				k--;
				console.log(k);
				if(k){
					tip.innerHTML = "your password is wrong,you can input " + k + " times";
				}
				else{
					k = 3;
					positionArr1 = [];
					positionArr2 = [];
					setTimeout("tip.innerHTML = 'Please input your password'",500);	
				}

			}
		}
		clearCanvas(cxt);
	}

	//数组去重复
	function clearRepeat(arr){
		var setArr = [];
		for(var i=0;i<arr.length;i++){
			if(arr.indexOf(arr[i]) === i){
				setArr.push(arr[i]);
			}
		}
		return setArr;
	}

	//设置密码
	function setPassword(){
		positionArr1 = clearRepeat(positionArr);
		positionArr = [];
		if(positionArr1.length >= 4){
			tip.innerHTML = "please input your password again";
		}
		else{
			tip.innerHTML = "please input more than four numbers";
			setTimeout("tip.innerHTML = 'Please input your password'",500);
			positionArr1 = [];
		}
		console.log(positionArr1);
	}

	//二次设置
	function secondSet(){
		positionArr2 = clearRepeat(positionArr);
		positionArr = [];

		if(positionArr2.toString() === positionArr1.toString()){
			tip.innerHTML = "input successfully";
			setTimeout("tip.innerHTML = 'please unlock'",500);
		}
		else{
			positionArr1 = [];
			positionArr2 = [];
			tip.innerHTML = "input wrong";
			setTimeout("tip.innerHTML = 'Please input your password'",500);
		}
		console.log(positionArr2);
	}

	//鼠标不触屏
	function clearCanvas(cxt){
		cxt.clearRect(0,0,WIDTH,HEIGHT);//清楚当前区域

		for(var i=0;i<9;i++){
			drawround(arr[i].x,arr[i].y,cxt);
		}

		positionArr = [];
	}

	//点击重置密码
	function reSet(){
		var pwd = document.getElementById("mima");
		positionArr1 = [];
		positionArr2 = [];
		positionArr = [];
		pwd.style.display = "none";
		tip.innerHTML = "Please input your password";

		cxt.clearRect(0,0,WIDTH,HEIGHT);//清楚当前区域

		for(var i=0;i<9;i++){
			drawround(arr[i].x,arr[i].y,cxt);
		}
	}

	//跳转另一界面
	function change(cxt){
		cxt.clearRect(0,0,WIDTH,HEIGHT);

		var imgObj = new Image();
		imgObj.src = "change.jpg";
		imgObj.onload = function(){
            cxt.drawImage(this, 0, 0,WIDTH,2/3 * HEIGHT);
        }
	}
}	
