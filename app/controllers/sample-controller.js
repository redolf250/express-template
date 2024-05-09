const {someServiceMethod} = require('../services/sample-service');

const indexController = async (req, res) => {
    console.info("Executing  in sample controller...");
    try {
        // Call the service method
        const result = await someServiceMethod(req);
        // res.json(result);
      } catch (error) {
        console.error(error);
        // res.status(500).json({ message: 'Internal Server Error' });
      }
}

module.exports = {indexController};