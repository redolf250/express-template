require('dotenv').config();
const app = require('./app');
const {mongoose} = require('mongoose');

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected to database");
    app.listen((process.env.PORT || 4000),()=>console.log(`Server listening on port ${process.env.PORT}`))
  })
  .catch(() => {
    console.log("Error connecting to database");
  });

