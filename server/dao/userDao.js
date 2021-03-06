const daoHelper = require('./daoHelper');
const BaseDao = require('./baseDao');
const User = require('../entity/user');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class UserDao extends BaseDao {
  constructor() {
    super(User);
  }

  async getListByName(name) {
    const users = await this.list({
      username: {
        [Op.like]: `%${name}%`,
      }
    });
    return users;
  }

  async getByUsername(name) {
    const user = await User.findOne({
      where: {
        username: {
          [Op.eq]: name,
        }
      },
    });
    return user;
  }
}

module.exports = UserDao;
