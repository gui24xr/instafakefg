import { UsersModel } from "../DAO/models/users.models.js"


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

                console.log(result)
                return result
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
                const result = await UsersModel.findAll({
                   where: filter // Recupera solo los atributos 'userName' y 'name'
                });
                return result
         
            }
            catch(error){
                console.log(error)
            }
        }


}
