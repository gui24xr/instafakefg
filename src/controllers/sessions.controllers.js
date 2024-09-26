
import SessionsRepositories  from "../repositories/sessions.repositories.js"
import UsersRepositories from "../repositories/users.repositories.js";

export default class SessionsController{

    static async login(req,res,next){
        //console.log('PETICION:', req)
        const {userName,password} = req.body
        console.log('req.body:', req.body)
        try{
            //data es el token recibido.
            const data = await SessionsRepositories.login({userName,password})
            //Si devuelve null es error xq no existe el user
            //Si devuelve el user comparo la contraseña del usuario devuelvo con la ingresada
            //Si es todo ok defvuelve el token, si no lanzo error
          
            res.cookie('instafake', data, {
                signed: true,
                maxAge: 3600000,
                httpOnly: true,
                //secure,
                //sameSite: 'none'
            })
  
            return res.status(200).json({
                status: 'ok',
                message:'Peticion OK !',
                data: data.userData
            })
        }catch(error){
            //console.log('Esto es en controller login: ', error)
            //res.status(500).json(error)
            console.log('LLegue al login de controller')
            //next(error)
            res.status(401).json({message:'El usuario no existe o la contraseña es incorrecta...'})
        }
    }

    }