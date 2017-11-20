const userRoute = require('./user');

const startRoutes = (app) => {
  app.use('/user', userRoute);
};

module.exports = startRoutes;