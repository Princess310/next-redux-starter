const baseRoute = require('./base');
const userRoute = require('./user');
const groupRoute = require('./group');

const routes = ['/user', '/group'];
const startRoutes = (app) => {
  app.use(routes, baseRoute);
  app.use('/user', userRoute);
  app.use('/group', groupRoute);
};

module.exports = startRoutes;