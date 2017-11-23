const process = require('process');

const Group = require('../server/entity/group');
const User = require('../server/entity/user');
const GroupUser = require('../server/entity/groupUser');

// you can use sync to create table here. eg below. 
// force: true will drop the table if it already exists
async function initDB() {
  await GroupUser.sync({force: true});
  await Group.sync({force: true});
  await User.sync({force: true});
  
  // table created, then init data for tables
  const group = await Group.create({
    name: 'group-01',
  });
  const user = await User.create({
    firstName: 'princess310',
    lastName: 'jet',
  });
  const groupUser = await user.addGroup(group);
  

  // show the log info
  console.log('\x1b[36m');  //cyan
  console.log('----------- db init success --------------');
  console.log('user: %s', user.fullName);
  console.log('group: %s', group.name);
  console.log('group user: { groupId: %s, userId: %s }', group.id, user.id);
  console.log('----------- /db init success --------------');
  console.log('\x1b[0m');

  
  process.exit(0);
}

// call init fn
initDB();
