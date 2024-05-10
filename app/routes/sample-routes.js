const express = require('express');
const {logInfo} = require('./../utils/logging/winston-logging')

const route = express.Router();

route.get('/', (req, res, next) => {
  res.send('GET request to the sample')

  logInfo("Executing in sample route...");
  next();
})


module.exports = route