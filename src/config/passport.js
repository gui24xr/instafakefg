
import passport from "passport";
import jwt from 'passport-jwt'

const JWTStrategy = jwt.Strategy;
const ExtractJwt = jwt.ExtractJwt;

export const initializePassport = () => {
    //Lee el JWT
    passport.use("jwt", new JWTStrategy({
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: process.env.SECRET_TOKEN_KEY || 'instafake'//"coderhouse"
        //Misma palabra que tenemos en la App.js! No se olviden! 
    }, async (jwt_payload, done) => {
        try {
            return done(null, jwt_payload);
        } catch (error) {
            return done(error);
        }
    }))
}




    const cookieExtractor = (req) => {
        let token = null;
        if(req && req.cookies) {
            token = req.signedCookies['instafake']
        }

        //console.log('El token extraido: ', token)
        return token;
    }
    
