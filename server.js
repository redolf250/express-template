require('dotenv').config();
const app = require('./app');
const {mongoose} = require('mongoose');
const  {logInfo,logError} = require('./app/utils/logging/winston-logging')

mongoose
  .connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.once('open', () => {
  app.listen((process.env.PORT || 4000),()=>logInfo(`Server listening on port ${process.env.PORT}`))
  logInfo(`http://localhost/sample/:${process.env.PORT || 4000}`);
});

db.on('error', (error) => {
  logError(`${error.message}`);
});

