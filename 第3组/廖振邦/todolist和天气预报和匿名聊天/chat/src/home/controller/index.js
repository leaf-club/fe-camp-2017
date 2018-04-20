'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
   let username='匿名用户'+(''+Math.random()).slice(-6);
   this.assign('username',username)
    return this.display();
  }
  async postAction(){
    let formData=this.post();
    formData.timenow=Date.now();
    let messages= await this.cache('messages')||[];
    messages.push(formData);
    let signal=(this.service('signal'))('new message')
    signal.pass();
    
   await this.cache('messages',messages);
    return this.success();
    }
    async syncAction(){
      let len=this.get('len');
      let messages=await this.cache('messages')||[];
      if(len>=messages.length){//作用:当相等时要挂起,因为对象没有进行pass(),既没有进行post操作,不等时直接返回新的message
        let signal=(this.service('signal'))('new message')
        await signal.promise;
        messages=await this.cache('messages')
        }
      return this.success({len:messages.length,new_message:messages.slice(len)})
    }
    async clearAction(){
      
      
   if(this.post()){
     await this.cache('messages','')
      return this.success('all data is cleared')
       }
         }
}