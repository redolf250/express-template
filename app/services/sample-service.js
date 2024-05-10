const sampleModel = require('../models/index');
const {logInfo} = require('./../utils/logging/winston-logging')

const someServiceMethod = async (req) => {
    logInfo("Executing in sample service...");
    // Perform business logic, interact with the database, etc.
    // For example:
    // const data = await db.query('SELECT * FROM users WHERE email = ?', requestData.email);
    // return data;
}

module.exports = {someServiceMethod};