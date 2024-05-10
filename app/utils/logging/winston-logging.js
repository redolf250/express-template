const {createLogger, transports, format} = require("winston");

const customFormat = format.combine(format.timestamp(),
format.printf((info)=> {
    return `[ ${info.timestamp} ] [${info.level.toUpperCase().padEnd(7)}]  ${info.message}`;
}))

const logger = createLogger({
    format: customFormat,
    level: "debug",
    transports: [
        new transports.Console({level: 'silly'}),
        // new transports.File({filename: 'app.log',level: 'info'})
    ]
});

function logSilly(message) {
    logger.silly(message);  
}

function logVerbose(message) {
    logger.verbose(message);  
}

function logInfo(message) {
    logger.info(message);  
}

function logDebug(message) {
    logger.debug(message);  
}

function logWarn(message) {
    logger.warn(message);  
}

function logError(message) {
    logger.error(message);  
}

module.exports = {logVerbose, logWarn, logDebug, logSilly, logError, logInfo};