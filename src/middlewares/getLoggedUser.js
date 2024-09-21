 
 import passport from "passport"
 
 
 //Simplemente mira si hay un token, si hay lo mete a propiedad req.currentUser.
 export function getUserFromTokenMiddleware(req,res,next){
    
    console.log('Middleware: ','getUserFromTokenMiddleware')
    passport.authenticate('jwt', { session: false }, async (err, user, info) => {
      if (err) {
        console.log('Caso hay un error')
       return next(err)  //Si hay un error por parte de passport vamos al manejador de errores.
      }
      if (!user) { 
        console.log('Caso no hay user')
        return next() //No hay user se sigue normal, pues el middleware authMiddleware sera encargado de rechazar rutas sin user logueados.
      }
      else{
        //Si hay un usuario con credenciales validas adjunto al objeto req esos datos en una propiedad currentUser para tener los datos del user logueado.
        //Luego mediente roleMiddleware (que viene luego de este authMiddleware concedo o deniego acceso segun rol)
       console.log('usuario en token: ', user)
      
        req.currentUser = user.user 
        console.log('Se ejcuto el middleware extractor: ',req.currentUser)
        next()
    }
  })(req, res, next)
  }
  
  
  