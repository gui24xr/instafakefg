import { PostsModel } from "../DAO/models/posts.models.js"


export default class PostsRepositories{
    
    static async createPost({textContent,urlImage,userId}){
        try{
            const result = await PostsModel.create({
                textContent,
                urlImage,
                userId
            })

            console.log(result)
            return result
        }catch(error){
            console.log(error)
        }


    }

}