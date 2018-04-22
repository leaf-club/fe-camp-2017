class Service{
  constructor(){
      this.reset();
  }
  reset(){
      this.promise=new Promise((resolve,reject)=>{
        this.pass=(arg)=>{
            resolve(arg);
            this.reset();
        }
        this.stop=(arg)=>{
            reject(arg);
            this.reset();
        }
      
      })
  }


}
const singal={};
module.exports=function(name){
    if(!singal[name]) singal[name]=new Service();
    return singal[name];
}