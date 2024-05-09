const sampleModel = require('../models/index');

const someServiceMethod = async (req) => {
    console.info("Executing  in sample service...");
    // Perform business logic, interact with the database, etc.
    // For example:
    // const data = await db.query('SELECT * FROM users WHERE email = ?', requestData.email);
    // return data;
}

module.exports = {someServiceMethod};