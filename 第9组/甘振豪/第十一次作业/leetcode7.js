/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result = 0;
    if(x < -2147483648 || x > 2147483647){
      return 0;
    }
    else{
      do{
        result = result * 10 + x % 10;
        x = parseInt(x / 10);
        if(x==0){
          break;
        }
      }
      while(true);
      if(result < -2147483648 || result > 2147483647){
        result = 0;
      }
      return result;
    }
  };