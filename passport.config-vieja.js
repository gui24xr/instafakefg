import passport from "passport"
import jwt from 'passport-jwt'
import GitHubStrategy from "passport-github2"
import { UsersService } from "../services/users.service.js";


const usersService = new UsersService()
const JWTStrategy = jwt.Strategy;
const ExtractJwt = jwt.ExtractJwt;

export const initializePassport = () => {
    //Lee el JWT
    passport.use("jwt", new JWTStrategy({
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: process.env.SECRET_TOKEN_KEY //"coderhouse"
        //Misma palabra que tenemos en la App.js! No se olviden! 
    }, async (jwt_payload, done) => {
        try {
            return done(null, jwt_payload);
        } catch (error) {
            return done(error);
        }
    }))


    //REIMPLEMENTAR ESTO
     //*PARA GITHUB******************************************/
     /*
     passport.use("github",new GitHubStrategy({
        clientID: 'Iv1.1df2eaa08b41c7eb', 
        clientSecret: '48be7bb869f051d8d0d55541356c7111815fcdd7',
        callbackURL: "http://localhost:8080/githubcallback",//url a la que dirijo si me dan autorizacion
        },
      async(accessToken, refreshToken, profile, done) => {
        console.log('Chusmeando user:', profile)
        try {
     
           const user = await usersService.getUserByEmail(profile._json.email)
           if (!user){//Si no existe genero un nuevo usuario.
                const {user} = usersService.createUser(profile._json.email,'')
                console.log('Entro a usuario no existe', user)
                done(null,user)
           }
           else{
            //Si el user existe genero un token y sigo.
            console.log('Ya existe un usuario con este', user)
               done(null,user)
           }
        } catch (error) {
            return  done(error)
        }

      }
    ))
    */


}

//Creamos el cookie extractor y leemos las cookies pero las firmadas.
//El server usa cookieParser con firma.

const cookieExtractor = (req) => {
    let token = null;
    if(req && req.cookies) {
        token = req.signedCookies[process.env.COOKIE_AUTH_TOKEN]
    }
    return token;
}


/*

GITHUB CON SESSION

      passport.use("github",new GitHubStrategy({
        clientID: 'Iv1.1df2eaa08b41c7eb', 
        clientSecret: '48be7bb869f051d8d0d55541356c7111815fcdd7',
        callbackURL: "http://localhost:8080/githubcallback",//url a la que dirijo si me dan autorizacion
        },
      async(accessToken, refreshToken, profile, done) => {
        console.log('Chusmeando user:', profile)
        try {
            //miro si el mail existe en mi BD, xq si no existe lo tengo que crear
           let user = await UserModel.findOne({email:profile._json.email}) 
           //Si no existe lo creo.
           if (!user){ //Ahora los datos de user lo saco de profile, o sea de los datos de github
                
                    let newUser = {
                    first_name: profile._json.name,
                    last_name: 'last_name',
                    email: profile._json.email,
                    age: 15, //NO importa la edad por ahora....
                    password: 'secreto',//Lo dejo vacio xq no lo manejo, es problema de github
                    rol: 'user' //Para github solo le daria permisos de usuario.
                }
                //Creo el usuario en la BD
                let result = await UserModel.create(newUser)
                //Hago el done y envio el resultado con el user ya creado.
                done(null,result)
           }
           else{//Si el usuario existe mando el user encontrado
            console.log('Entro x aca')
            const token = generateJWT(user.user)
                done(null,user)
           }
            
        } catch (error) {
            return  done(error)
        }

      }
    ))


}



*/
