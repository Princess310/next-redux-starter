const express = require('express');
const userService = require('../service/userService');

const userRoute = express.Router();

userRoute.get('/getList', (req, res) => {
  userService.getList();
  res.send('get list');
});

module.exports = userRoute;