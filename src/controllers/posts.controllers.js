import { PostsRepositories } from "../modulespaths.js";

export default class PostsController{
    static async createPost(req,res,next){
        const {textContent} = req.body
        try{
            const data = await PostsRepositories.createPost({textContent:textContent})

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
            res.status(500).json(error)
        }
    }
}