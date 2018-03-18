
var a=0;
var integ=0, decim=0;
var integ1=0, decim1=0;
var integ2 = 0, decim2 = 0;
var oprand=0;
var opset = 0, opsetuse =0;

window.onload = function(){
	var trs = document.getElementsByName("btn");
	for(var i=0;i<trs.length;i++){
	    trs[i].onmouseover=function(){this.style.backgroundColor="#dedbdb";}
	    trs[i].onmouseout=function(){this.style.backgroundColor="#fff";}
	    // trs[i].onclick=function(){this.style.backgroundColor="#1e1f1e3d";}
	}

	var AddOnclick = document.getElementsByClassName("num");
	for (var i=0; i<AddOnclick.length; i++){
		AddOnclick[i].onclick=inputnum;
	}

	document.getElementById("top-clear").setAttribute("onclick", "clearAll()");
	document.getElementById("op-equ").setAttribute("onclick", "workout()");

	document.getElementById("op-add").setAttribute("onclick", "oprandget(this)");
	document.getElementById("op-sub").setAttribute("onclick", "oprandget(this)");
	document.getElementById("op-mul").setAttribute("onclick", "oprandget(this)");
	document.getElementById("op-div").setAttribute("onclick", "oprandget(this)");
	document.getElementById("op-pow2").setAttribute("onclick", "oprandget(this)");
	document.getElementById("op-sq2").setAttribute("onclick", "oprandget(this)");

	document.getElementById("top-oppo").setAttribute("onclick", "oppo()");
	document.getElementById("top-percent").setAttribute("onclick", "percent()");
	document.getElementById("top-wash").setAttribute("onclick", "washAnum()");
	
}

function washAnum() {
	// document.getElementById("result").innerHTML.pop();

	// for (var i = document.getElementById("result").innerHTML.length-1; i>1; i--){
	// 	var temp = document.getElementById("result").innerHTML[i-1];
	// 	document.getElementById("result").innerHTML[i] = 8;
	// }
	// document.getElementById("result").innerHTML[0]=" ";

	// var temp = parseInt(document.getElementById("result").innerHTML);
	// document.getElementById("result").innerHTML = parseInt(temp/10);

	if (decim){
		decim = parseFloat(parseInt(decim * Math.pow(10, decim.length - 3)) / Math.pow(10, decim.length - 3));
		// integ = integ/10;
		document.getElementById("result").innerHTML = parseInt(integ) + decim;
		if (opset) {
			integ2 = integ;
			decim2 = decim;
		} else {
			integ1 = integ;
			decim1 = decim;
		}
	}
	else{
		integ = parseInt(integ / 10);
		document.getElementById("result").innerHTML = integ;
	}
}

function percent() {
	document.getElementById("result").innerHTML = document.getElementById("result").innerHTML/100;
	integ = integ/100;
	decim = decim/100;
	if (opset) {
		integ2 = integ2 / 100;
		decim2 = decim2 / 100;
	} else {
		integ1 = integ1 / 100;
		decim1 = decim1 / 100;
	}
}

function oppo() {
	document.getElementById("result").innerHTML = -document.getElementById("result").innerHTML
	integ = -integ;
	decim = -decim;
	if (opset) {
		integ2 = -integ2;
		decim2 = -decim2;
	} else {
		integ1 = -integ1;
		decim1 = -decim1;
	}
}

function oprandget(obj) {
	oprand = obj.innerHTML;
	opset = 1;
	// document.getElementById("result").innerHTML += oprand;
	// document.getElementById("result").innerHTML = 0;
	integ = 0;
	decim = 0;
}

function workout() {
	var num1 = parseFloat(parseFloat(integ1) +parseFloat(decim1));
	var num2 = parseFloat(parseFloat(integ2) +parseFloat(decim2));
	switch (oprand) {
		case "+":
			// document.getElementById("result").innerHTML = num1 + num2;
			document.getElementById("result").innerHTML = Math.round((num1 + num2) * Math.pow(10, 6)) / Math.pow(10, 6);
			break;
		case "-":
			// document.getElementById("result").innerHTML = (num1 - num2).toFixed(6);
			document.getElementById("result").innerHTML = Math.round((num1 - num2)*Math.pow(10, 6))/Math.pow(10, 6);
			break;
		case "x":
			// document.getElementById("result").innerHTML = num1 * num2;
			document.getElementById("result").innerHTML = Math.round((num1 * num2) * Math.pow(10, 6)) / Math.pow(10, 6);
			break;
		case "/":
			// document.getElementById("result").innerHTML = num1/num2;
			document.getElementById("result").innerHTML = Math.round((num1 / num2) * Math.pow(10, 6)) / Math.pow(10, 6);
			break;
		case "^2":
			// document.getElementById("result").innerHTML = num1/num2;
			document.getElementById("result").innerHTML = Math.round((Math.pow(num1, 2)) * Math.pow(10, 6)) / Math.pow(10, 6);
			break;
		case "sq":
			// document.getElementById("result").innerHTML = num1/num2;
			document.getElementById("result").innerHTML = Math.round((Math.pow(num1, 1/2)) * Math.pow(10, 6)) / Math.pow(10, 6);
			break;
		default:
			break;
	}
}

function clearAll() {
	document.getElementById("result").innerHTML=0;
	a=0;
	integ=0;
	decim=0;
	oprand = 0;
	opset = 0;
	opsetuse = 0;
}


function inputnum(){

	a = this.innerHTML;

	if (opsetuse == 0 && opset == 1){  
		// finish inputing the first number and oprand
		// if(opset)
		document.getElementById("result").innerHTML=a;
		integ=a;
		opsetuse=1;
	}else{
		// a = this.innerHTML;
		var RESULT = document.getElementById("result").innerHTML;
		// document.getElementById("result").innerHTML +=a;
		// to deal the default 0 in the screen

		// to check whether the . has been input
		var point = 0;
		// var opset =0;
		for (var i = 0; i < RESULT.length; i++) {
			if (document.getElementById("result").innerHTML[i] == ".") {
				point = 1;
			}
			// if (document.getElementById("result").innerHTML[i] == "+" || 
			// 	document.getElementById("result").innerHTML[i] == "-" ||
			// 	document.getElementById("result").innerHTML[i] == "x" ||
			// 	document.getElementById("result").innerHTML[i] == "/" ||
			// 	document.getElementById("result").innerHTML[i] == "^2" ||
			// 	document.getElementById("result").innerHTML[i] == "sq"){
			// 	// if(opset == 0){
			// 	// 	decim = 0;
			// 	// 	integ = 0;
			// 	// }
			// 	alert("op input!")
			// 	document.getElementById("result").innerHTML = 0;
			// 	decim = 0;
			// 	integ = 0;
			// 	opset =1;	
			// }
		}

		if (RESULT[0] == 0) {
			if (a != ".") {
				// input a integer
				if (point == 1) {
					decim += a;
				} else {
					integ += a;
				}

				if (RESULT.length > 1) {
					document.getElementById("result").innerHTML += a;
					// alert(document.getElementById("result").innerHTML);
				} else {
					document.getElementById("result").innerHTML = a;
				}
			} else {
				// else: input the .   , which result in 0.x
				if (point == 1) {
					alert("wrongly input! please check again!");

				} else {
					document.getElementById("result").innerHTML += a;
					decim += a;
				}
			}
		} else {
			if (a == ".") {
				if (point == 1) {
					alert("wrongly input! please check again!");
				} else {
					document.getElementById("result").innerHTML += a;
					decim += a;
				}
			} else {
				document.getElementById("result").innerHTML += a;
				if (point == 1) {
					decim += a;
				} else {
					integ += a;
				}
			}
		}

	}
	

	if (opset){
		integ2 = integ;
		decim2 = decim;
	}else{
		integ1 = integ;
		decim1 = decim;
	}
	// alert(integ+"+"+decim);
	// alert(decim);
}





