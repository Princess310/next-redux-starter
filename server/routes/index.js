const baseRoute = require('./base');
const userRoute = require('./user');

const routes = ['/user'];
const startRoutes = (app) => {
  app.use(routes, baseRoute);
  app.use('/user', userRoute);
};

module.exports = startRoutes;