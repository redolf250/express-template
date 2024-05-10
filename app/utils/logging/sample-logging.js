const log4js = require("log4js");
log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } },
});

const logger = log4js.getLogger("cheese");

function logTrace(message) {
    logger.trace(message);  
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

function logFatal(message) {
    logger.fatal(message);  
}

module.exports = {logTrace, logDebug, logFatal, logError, logInfo,logWarn};