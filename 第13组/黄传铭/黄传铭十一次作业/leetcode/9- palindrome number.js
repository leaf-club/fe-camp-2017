function check(num) {
    let temp = num, x, y = 0, target = 0;
    if(num > 0){
        console.log(1);
        while(temp != 0){
            x = parseInt(temp%10);
            temp = parseInt(temp/10);
            y = parseInt(x + y*10);
            if(temp == y || parseInt(temp/10) == y){
                target = 1;
                alert(num + ' is a Palindrome Number');
                break;
            }
        }
        //num为回文数则不执行此
        if(!target){
            alert(num + ' is not a Palindrome Number');
        }
        
    }
    else{
        alert(num + 'is not a Palindrome Number');
    } 
}

check(12321);