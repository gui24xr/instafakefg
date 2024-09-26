import { PostsRepositories } from "../modulespaths.js";

export default class PostsController{
    static async createPost(req,res,next){
        const {textContent} = req.body
        
        //console.log('CURRENT USER EN CREATE POST: ', req.currentUser.userId)
        try{
            const data = await PostsRepositories.createPost({
                textContent:textContent,
                urlImage: './defaultpicture.png',
                userId: req.currentUser.userId
            
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
            res.status(500).json(error)
        }
    }

    
    static async likePost(req,res,next){
        const {pid:postId} = req.params
        //Tenemos que quitar el user del tqoque
        const {uid:userId} = req.body
        try{

        }catch(error){
            res.status(500).json(error)
        }
    }
}