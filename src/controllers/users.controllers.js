
import { UsersRepositories } from "../modulespaths.js";

export class UsersController{

    static async createUser(req,res,next){
        const { userName, password, name, lastName, age } = req.body
        try{

            //LLAMAMOS A ZOD
             //IF ERROR POR ZOD ENTONCES RETURN ESTATUS 400


            const data = await UsersRepositories.createUser({
                userName:userName,
                password:password,
                name:name,
                lastName: lastName,
                age:age
            })


            return res.status(200).json({
                status: 'ok',
                message:'Peticion OK !',
                data: data
            })
        }catch(error){
             //IF ERROR POR ZOD ENTONCES RETURN ESTATUS 400

            res.status(500).json(error)
        }
    }




    static async getUser(req,res,next){
        const  {userId,userName,name,lastName,privateProfile,age}  = req.body
        console.log('body: ',req.body)
        try{

            //LLAMAMOS A ZOD
             //IF ERROR POR ZOD ENTONCES RETURN ESTATUS 400

            const data = await UsersRepositories.getUser({
                user:userId,
                userName:userName,
                name:name,
                lastName: lastName,
                age:age,
                privateProfile: privateProfile
            })

            if (data.length <1 )  return res.status(404).json({
                status: 'ok',
                message:'Peticion OK !',
                data: data
            })

            return res.status(200).json({
                status: 'ok',
                message:'Peticion OK !',
                data: data
            })
        }catch(error){
             //IF ERROR POR ZOD ENTONCES RETURN ESTATUS 400
            res.status(500).json(error)
        }
    }

}

export const JUANCITO = 242424242


