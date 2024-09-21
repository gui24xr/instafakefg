function handlerErrorsMiddleware(error, req, res, next){
    console.log('Estoy en el miidleware errores')
    console.log('El error es: ', error)
    res.status(500).json(error)
}

export {handlerErrorsMiddleware}