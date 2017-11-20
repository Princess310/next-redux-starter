const userDao = require('../dao/userDao');

class UserSevice {
  static getList() {
    const users = userDao.findAll();
    return users;
  }
}

module.exports = UserSevice;