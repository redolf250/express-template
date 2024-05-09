const express = require('express');

const route = express.Router();

route.get('/', (req, res, next) => {
  res.send('GET request to the sample')
  console.info("Executing  in sample route...");
  next();
})


module.exports = route