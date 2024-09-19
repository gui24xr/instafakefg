
import UsersRepositories from "./users.repositories.js"
import { generateJWT } from "../utils/sessiontools.js"


export default class SessionsRepositories{

    //Si todo esta ok devuelve un token, si no, devuelve error
    static async login({userName,password}){
        try{
           const authResult = await UsersRepositories.authUser({userName,password})

           console.log('auth result: ', authResult)
           //Si fue autorizado deuvelve el dto y si no null entonces
           if (!authResult) throw new Error('El usuario o contraseña no existen...')

            return generateJWT(authResult)
        }catch(error){
            console.log(error)
            throw error
        }
    }
}