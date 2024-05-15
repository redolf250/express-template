
let envFilePath = process.env.NODE_ENV 
  ? `./environments/.env.${process.env.NODE_ENV}` 
  : `./environments/.env`;

require('dotenv').config({path: envFilePath});
const app = require('./app');
const {mongoose} = require('mongoose');
const  {logInfo,logError} = require('./app/utils/logging/winston-logging')

mongoose
  .connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.once('open', () => {
  logInfo(`Active environment: ${process.env.NODE_ENV}`);
  app.listen((process.env.PORT || 4000),()=>logInfo(`Server listening on port ${process.env.PORT}`))
  logInfo(`http://localhost:${process.env.PORT || 4000}/sample`);
});

db.on('error', (error) => {
  logError(`${error.message}`);
});

