var romanToInt = function(s) {
    var map=new Map([["I",1],["X",10],["C",100],["M",1000],["V",5],["L",50],["D",500],["O",0]]);
    var num=0;
    if(s.length%2!=0) s+="O";
    //console.log(s);
    for(var i=0;i<s.length;i=i+2){
        if(s.substring(i,i+1)<s.substring(i+1,i+2)){
            num+=(map.get(s.substring(i+1,i+2))-map.get(s.substring(i,i+1)))
        }
        else {
            num+=(map.get(s.substring(i+1,i+2))+map.get(s.substring(i,i+1)))
        }
    }
    
    return num
};
console.log(romanToInt("DCXXI"));
