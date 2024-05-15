const  {logInfo,logError} = require('./../utils/logging/winston-logging')
const {someServiceMethod} = require('../services/sample-service');

const indexController = async (req, res) => {
  
    try {
        // Call the service method
        const result = await someServiceMethod(req);
        // res.json(result);
        logInfo("Executing in sample controller...");
      } catch (error) {
        logError(error);
        // res.status(500).json({ message: 'Internal Server Error' });
      }
}

module.exports = {indexController};