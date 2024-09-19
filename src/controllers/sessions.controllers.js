
import SessionsRepositories  from "../repositories/sessions.repositories.js"
import UsersRepositories from "../repositories/users.repositories.js";

export default class SessionsController{

    static async login(req,res,next){
        const {userName,password} = req.body
        console.log('req.body:', req.body)
        try{
            const data = await SessionsRepositories.login({userName,password})
            //Si devuelve null es error xq no existe el user
            //Si devuelve el user comparo la contraseña del usuario devuelvo con la ingresada
            //Si es todo ok defvuelve el token, si no lanzo error
            console.log('searchedUser: ',data)

            //Este data, que es el token generado, lo tengo que enviar x cookies al cliente.
            res.status(201).json({data})
        }catch(error){
            res.status(500).json(error)
        }
    }

    }