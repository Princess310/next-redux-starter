const daoHelper = require('./daoHelper');
const BaseDao = require('./baseDao');
const User = require('../entity/user');

class UserDao extends BaseDao {
  constructor() {
    super('user');
  }

  // so, we need use async on node version > 7
  static findAll() {
    User.findAll().then((users) => {
      // console.log('users', users);
      return users;
    });
  }
}

module.exports = UserDao;
