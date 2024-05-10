const {logInfo} = require('./../utils/logging/winston-logging')

const indexValidator = (req, res, next) => {
    logInfo("Executing in sample validation")
    next()
}



module.exports = {
    indexValidator  
}