'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  adapter: {
    mysql: {
      host: '127.0.0.1',
      port: '3306',
      database: 'todolist',
      user: 'root',
      password: '15798015790liao',
      prefix: 'think_',
      encoding: 'utf8'
    },
    mongo: {
       
    }
  }
};