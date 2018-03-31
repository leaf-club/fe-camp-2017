var aArr = document.getElementsByTagName("a");
var divArr = document.getElementsByTagName("div");
var liArr = document.getElementsByTagName("li");
var i;
aArr[0].onclick = function(){
	for(var j=0;j<divArr.length;j++){
		if(j===0){
			divArr[j].className = "show";
			liArr[j].className = "show1";
		}
		else{
			divArr[j].className = "hide";
			liArr[j].className = "hide1";
		}
	}
}
aArr[1].onclick = function(){
	for(var j=0;j<divArr.length;j++){
		if(j===1){
			divArr[j].className = "show";
			liArr[j].className = "show1";
		}
		else{
			divArr[j].className = "hide";
			liArr[j].className = "hide1";
		}
	}
}
aArr[2].onclick = function(){
	for(var j=0;j<divArr.length;j++){
		if(j===2){
			divArr[j].className = "show";
			liArr[j].className = "show1";
		}
		else{
			divArr[j].className = "hide";
			liArr[j].className = "hide1";
		}
		
	}
}