const indexValidator = (req, res, next) => {
    console.info("Executing in sample validation")
    next()
}



module.exports = {
    indexValidator  
}