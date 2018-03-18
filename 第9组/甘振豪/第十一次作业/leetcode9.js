/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var result = 0;
    var xcopy = x;
    if(x < 0 || x > 2147483647){
      return false;
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
      if(result > 2147483647 || result != xcopy){
        return false;
      }
      else{
        return true;
      }
    }
  };