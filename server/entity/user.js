const Sequelize = require('sequelize');
const sequelize = require('../dao/daoHelper');

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

// force: true will drop the table if it already exists
User.sync({force: true}).then(() => {
  // Table created
  return User.create({
    firstName: 'princess310',
    lastName: 'jet'
  });
});

module.exports = User;