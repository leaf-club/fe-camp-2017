function remove(string){
var arr=string.split(",");
var b=[];
for(let i=0;i<arr.length;i++){
   if(b.indexOf(arr[i])===-1){
        b.push(arr[i]);
   }
}
console.log(b.join(","));
}
remove("游泳,健身,篮球,游泳,篮球,阅读");