const indexInterceptor = (req, res, next) => {
    console.info("Executing  in sample middleware")
    next()
}

module.exports = {
    indexInterceptor
}