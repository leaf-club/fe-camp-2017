'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action 传给前台的数据
   * @return {Promise} []
   */
  async indexAction() {
    //auto render template file index_index.html
    let model = this.model('tododemo');
    let dataTodo = await model.where({ done: 0 }).select();
    let dataDone = await model.where({ done: 1 }).select();
    this.assign('todoList', dataTodo);
    this.assign('doneList', dataDone);
    this.assign('todoCount', dataTodo.length);
    this.assign('doneCount', dataDone.length);
    /* console.log(dataTodo); */
    return this.display();
  }
  /**
   * 与www的index.js里的add方法对应,它里面add()传来的数据在这里接受
   */
  async addAction() {
    let model = this.model('tododemo');
    if (this.isPost()) {//this.post是add方法传过来的数据
      let item = this.post('title');
      let insertItem = await model.add({//添加到数据表
        title: item,
        done: 0
      });
      if (!insertItem) {
        return this.fail(1000, '添加代办项失败')
      } else {
        return this.success();
      }
    } else {
      return this.fail(2000, 'post参数不存在')
    }
  }

  async updateAction() {
    if (this.post()) {
      let itemId = this.post('todoid');//post里的参数对应对象里的key值,返回的值是纯在itemID
      let isDone = this.post('status');
     
      let updateItem = await this.model('tododemo').where({ id: itemId }).update({ done: isDone });
      if (!updateItem) {
        return this.fail(1000, '更新代办项失败')
      } else {
        return this.success();
      }
    } else {
      return this.fail(2000, '参数不存在')
    }
  }


  async removeAction() {
    if (this.post()) {
      let itemId = this.post('id');//post里的参数对应对象里的key值,返回的值是纯在itemID

      let removeItem = await this.model('tododemo').where({ id: itemId }).delete();
      if (!removeItem) {
        return this.fail(1000, '删除代办项失败')
      } else {
        return this.success();
      }
    } else {
      return this.fail(2000, '参数不存在')
    }
  }
  async clearAction() {
    if (this.post()) {


      let removeItem = await this.model('tododemo').where('1=1').delete();
      if (!removeItem) {
        return this.fail(1000, '删除代办项失败')
      } else {
        return this.success();
      }
    } else {
      return this.fail(2000, '参数不存在')
    }
  }
  async editAction() {
    if (this.post()) {
      let itemId = this.post('id');
      let newTitle = this.post('value');

      let Item = await this.model('tododemo').where({ id:itemId }).update({ title: newTitle });
      if (!Item) {
        return this.fail(1000, '删除代办项失败')
      } else {
        return this.success();
      }
    } else {
      return this.fail(2000, '参数不存在')
    }
  }
}

