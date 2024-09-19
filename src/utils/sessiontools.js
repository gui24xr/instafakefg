import jwt from 'jsonwebtoken'

//Estas 2luego vendran de env
const SECRET_TOKEN_KEY = process.env.SECRET_TOKEN_KEY || 'instafake'//'coderhouse'
const EXPIRES_TOKEN_TIME = process.env.EXPIRES_TOKEN_TIME || '1h'



/*
    userData: {userId,userName}
*/

function generateJWT(userData){
    
    return jwt.sign({user: userData},SECRET_TOKEN_KEY,{expiresIn:EXPIRES_TOKEN_TIME})
}

export {generateJWT}