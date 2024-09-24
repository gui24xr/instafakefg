import { UsersModel } from "../DAO/models/users.models.js"
import { UserDTO } from "../DTO/users.dto.js"
import { database } from "../modulespaths.js"

export default class UsersRepositories{

        static async createUser({userName, password, name, lastName, age}){
            try{
                const result = await UsersModel.create({
                    userName:userName,
                    password: password,
                    name: name,
                    lastName: lastName,
                    age: age
                })

                //console.log('resultado: ', result.dataValues)
                
                return this.getUserDTO({
                    userId:result.dataValues.userId,
                    userName: result.dataValues.userName,
                    password: result.dataValues.password,
                    name: result.dataValues.name,
                    lastName: result.dataValues.lastName,
                    age: result.dataValues.age,
                    createdAt: result.dataValues.createdAt
                })

            }catch(error){
                console.log(error)
            }
        }

        //Devuelve el objeto del user o null
        static async getUser({userName,userId,name,lastName,privateProfile,age}){
            try{

                const filter = {}
                if (userName) filter.userName = userName
                if (userId) filter.userId = userId
                if (name) filter.name = name
                if (lastName) filter.lastName = lastName
                if (privateProfile) filter.privateProfile = privateProfile
                if (age) filter.age = age

                console.log('Filtro: ', filter)

                const resultArray = await UsersModel.findAll({
                   where: filter // Recupera solo los atributos 'userName' y 'name'
                });

              
                if (resultArray.length<1) return null

                const arrayDTOList = resultArray.map(item => (this.getUserDTO(item.dataValues)))

                return arrayDTOList
            
            }
            catch(error){
                console.log(error)
            }
        }


        //Comprueba si existe el usuario y la contraseña es valida.
        //Si existe devuelve Informacion basica del usuario 
        //Si no existe devuelve null
        static async authUser({userName,password}){
            //HAY QUE VALIDAR QUE VENGA EL PASSWORD Y USERNAME, SI NO, ERROR
            try{
                const searchedUser = await UsersModel.findOne({
                    where: {
                      userName: userName,   
                      password: password,     
                    }
                  })

                if (!searchedUser) return null

                //comparo las contraseñas
                //Ya me devuelve dto el this.,getUser. comparo contraSEÑAS
                //console.log('INICIO SESION: ',searchedUser.dataValues)
                return this.getUserDTO({
                    userId:searchedUser.dataValues.userId,
                    userName: searchedUser.dataValues.userName,
                    name: searchedUser.dataValues.name,
                    lastName: searchedUser.dataValues.lastName,
                    age: searchedUser.dataValues.age,
                    createdAt: searchedUser.dataValues.createdAt
                })
            }catch(error){
                console.log(error)
                throw error
            }
        }


        static getUserDTO({userId,userName,password,name,lastName,age,createdAt}){
            return new UserDTO({userId,userName,password,name,lastName,age,createdAt})
        }

}
