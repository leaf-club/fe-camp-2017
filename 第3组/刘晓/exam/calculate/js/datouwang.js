// Get all the keys from document
var keys = document.querySelectorAll('#calculator span');
var m=0;
// Add onclick event to all the keys and perform operations
var word="";
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		// Get the input and button values

		var input = document.querySelector('.screen');

		var btnVal = this.innerText;
		
		m=m+1;
		//input.innerHTML += btnVal;
		word = word+btnVal;
		localStorage.setItem("words",word)
		input.innerHTML += "*";
		// Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
		// If clear key is pressed, erase everything
			if(localStorage.getItem("words")=="12ABC3DEF4 ABC5 JKL6 MNO"){
				alert("密码正确");
				localStorage.clear();
				m=0;
				input.innerHTML = '';
				word="";
			}
			else if(btnVal=="emergency"){
				alert("拨打110");
				input.innerHTML = '';
				decimalAdded = false;
				localStorage.removeItem("words")
				word="";
				m=0;
			}
			 else if(m>5){
				alert("密码错误");
				localStorage.clear();
				m=0;
				input.innerHTML = '';
				word="";
		}


		else if(btnVal == 'clean') {
			input.innerHTML = '';
			decimalAdded = false;
			localStorage.removeItem("words")
			word="";
			m=0;

		}

	} 
}