const express = require('express');
const compression = require('compression');
const {sampleRoute} = require('./app/routes/index');
const {indexValidator} = require('./app/validators/sample-validators');
const {indexInterceptor} = require('./app/middleware/sample-middleware');
const {indexController} = require('./app/controllers/sample-controller');

const app = express();

app.use(express.json());
app.use(compression());
app.use('/sample',sampleRoute,indexValidator,indexInterceptor,indexController);

module.exports = app