function change(s) {
    var l = s.split(''),
        temp = [],
        num, result = 0;
    for(var i = 0; i < l.length; i++){
       switch(l[i]){
           case 'I': temp[i] = 1;
                    break;
           case 'X': temp[i] = 10;
                    break;
           case 'C': temp[i] = 100;
                    break;
           case 'M': temp[i] = 1000;
                    break;
           case 'V': temp[i] = 5;
                    break;
           case 'L': temp[i] = 50;
                    break;
           case 'D': temp[i] = 500;
                    break;
       }
    }
    num = temp[0]
    for(var i = 1; i < l.length; i++){
        if(temp[i] == temp[i-1]){
            num += temp[i];
        }
        else if(temp[i] < temp[i-1]){
            result += num;
            num = temp[i];
        }
        else{
            num = temp[i] - num;
        }   
    }
    result += num;
    return result;
    // console.log(result);
}
// change('XXXIV');