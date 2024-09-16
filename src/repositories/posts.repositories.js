import { PostsModel } from "../DAO/models/posts.models.js"


export default class PostsRepositories{
    
    static async createPost({textContent}){
        try{
            const result = await PostsModel.create({textContent:textContent })

            console.log(result)
            return result
        }catch(error){
            console.log(error)
        }


    }

}