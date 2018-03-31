var longestCommonPrefix = function(strs) {
   var pre=strs[0]||""//pre当默认前缀
   var l=pre.length;
   var len=strs.length;
 for(let i=0;i<len;i++){
   while(true){
       if(strs[i].substring(0,l)!==pre)
   {
        pre=pre.substring(0,l-1)
        l=pre.length;
   }
       else{
           break;
       }
   }
}
   return pre;
};
