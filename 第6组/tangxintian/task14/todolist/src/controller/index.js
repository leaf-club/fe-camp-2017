const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    let model = this.model('tododemo');
    // 查询正在进行的todolists
    let todoData = await model.where({done: 0}).select();
    // 查询已经完成的todolist
    let doneData = await model.where({done: 1}).select();
    this.assign('todoList', todoData);
    this.assign('doneList', doneData);
    this.assign('todoCount', todoData.length);
    this.assign('doneCount', doneData.length);
    console.log(doneData.length)
    return this.display();
  }

  async addAction() {
    if (this.isPost) {
      let model = this.model('tododemo');
      let item = this.post('title');
      let insertItem = await model.add({
        title: item,
        done: 0
      });
      if (!insertItem) {
        return this.fail(1000, '添加待办项失败！');
      } else {
        return this.success();
      }
    } else {
      return this.fail(2000, 'post传递参数不存在！');
    }
  }

  async clearAction() {
    if (this.isPost) {
      let model = this.model('tododemo');
      let clearItem = await model.delete();
    }
  }

  async removeAction() {
    if (this.isPost) {
      let model = this.model('tododemo');
      let item = this.post('id');
      let removeItem = await model.where({id: item}).delete();
      if (!removeItem) {
        return this.fail(1000, '删除待办项失败！');
      } else {
        return this.success();
      }
    } else {
      return this.fail(2000, 'post传递参数不存在！');
    }
  } 
  async updateAction() {
    if (this.isPost) {
      let model = this.model('tododemo');
      let item = this.post('id');
      let state = this.post('status');
      let updateItem = await model.where({id: item}).update({done: state});
      if (!updateItem) {
        return this.fail(1001, '更新失败！');
      } else {
        return this.success;
      }
    } else {
      return this.fail(2001, '未传递参数');
    }
  }
  async editAction() {
    if (this.post) {
      let model = this.model('tododemo');
      let itemId = this.post('itemId');
      let newTitle = this.post('title');
      let editItem = await model.where({id: itemId}).update({title: newTitle});
      if (!editItem) {
        return this.fail(3001, '修改失败！');
      } else {
        return this.success;
      }
    } else {
      return this.fail(3001, '未传递参数');
    }
  }
};
