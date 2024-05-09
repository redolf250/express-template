const {indexService} = require('../services/sample-service');

const indexController = (req, res,next) => {
    res.send('GET request to students index')
    console.info("Executing  in sample controller...");
    next();
    // indexService(req, res,next);
}

module.exports = {indexController};