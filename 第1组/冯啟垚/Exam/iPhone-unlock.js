// 根据状态机来写不同输入对应的情况

var NumInput=0;
var num=[];
var state=0;
var state_pre=0;

var NumClick = document.getElementsByClassName("num-circle");

for (var i = 0; i < NumClick.length; i++) {
	// NumClick[i].onclick = getnum;
	// NumClick[i].onmousedown = getnum;
	NumClick[i].ontouchstart=getnum;
	NumClick[i].onmouseup = gotnum;

}

document.getElementById("del").ontouchstart=deleteinput;


// 用于获取touch时 1. 密码输入位数的提示小圆圈
// 				  2. 进行类状态机的下一个状态输入
// 				  3. 鼠标点击按下时数字圈背景色的改变
function getnum() {
	this.style.background = "#9e9e9e";
	num[NumInput] = this.childNodes[1].innerHTML;
	NumInput++;
	PWInput(NumInput)
	StateMachine(num, NumInput);
}

// 获取完数字密码之后的背景色恢复
function gotnum() {
	this.style.background = "#CCC";
}

// 密码输入位数提示
function PWInput(L) {
	var pwcircle = document.getElementsByClassName("pw");
	for(var i=0; i<L; i++){
		pwcircle[i].style.background = "#9e9e9e";
	}
}

function PWClear(L) {
	var pwcircle = document.getElementsByClassName("pw");
	for (var i = 0; i < L; i++) {
		pwcircle[i].style.background = "#CCC";
	}
	NumInput = 0;
	num.length = 0;
	state = 0;
}


// 成功解锁屏幕之后对原屏幕和新背景的动画加载
function UnlockPage() {
	// var screen = document.getElementById("screen");
	// screen.background="#CCC";
	// screen.style.display="none";
	var screen = document.getElementsByClassName("screen-content");
	for(var i=0; i<screen.length; i++){
		screen[i].style.display="none";
		screen[i].style.animation= "fadingLockPage 1s linear";
	}
	screen[0].parentElement.style.backgroundImage="URL(mainpage.png)";
	screen[0].parentElement.style.animation= "loadingBG 1s linear";
	// screen[0].parentElement.style.background-size:100% 10rem;
	screen[0].parentElement.style.backgroundSize="100% 100%";
}

// 解锁失败时的动画加载
function lockpage(){
	document.getElementById("pw-input").style.animation="loadingpage 0.3s linear";
	setTimeout('PWClear(NumInput)', 200);
	// document.getElementById("pw-input").style.animation="none";
	// cancelanimation();
}

// 取消再解锁成功时对密码提示位绑定的动画效果
function cancelanimation(){
	document.getElementById("pw-input").style.animation="none";
}

function deleteinput(){
	NumInput--;
	state = state_pre;
	document.getElementsByClassName("pw")[NumInput].style.background = "#CCC";
}


// 类状态机
function StateMachine(num, numlength) {
	state_pre = state;
	switch (state) {
		case 0:  //第一次输入，若为1则进行后面的密码匹配
			cancelanimation();
			if (num[0] == 1) {
				state=1;
			}else{
				state=2;
			}
			break;
		case 1: //第一次输入正确，进行的后续密码匹配
			switch (numlength) {
				case 2:
					if (num[numlength-1] == 2) {
						state=1;
					}else{
						state=2;
					}
					break;
				case 3:
					if (num[numlength - 1] == 3) {
						state = 1;
					} else {
						state = 2;
					}
					break;
				case 4:
					if (num[numlength - 1] == 4) {
						state = 1;
					} else {
						state = 2;
					}
					break;
				case 5:
					if (num[numlength - 1] == 5) {
						state = 1;
					} else {
						state = 2;
					}
					break;
				case 6:
					if (num[numlength - 1] == 6) {
						state = 1;
						setTimeout('UnlockPage()', 500);
						// PWClear(numlength);
						
						// UnlockPage();
					} else {
						state = 2;
					}
					break;
				default:
					break;
			}
			break;
		case 2:
			if(numlength == 6){
				// alert("password is wrong!");
				lockpage();
				// PWClear(numlength);
			}
		break;
	
		default:
			break;
	}
}

