const  {logInfo} = require('./../utils/logging/winston-logging')

const indexInterceptor = (req, res, next) => {
    logInfo("Executing in sample middleware")
    next()
}

module.exports = {
    indexInterceptor
}