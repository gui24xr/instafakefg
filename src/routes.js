import express from 'express'
//import { CommentsController,PostsController,UsersController, SessionsController } from './modulespaths.js'
import { database} from './modulespaths.js'

import SessionsController from './controllers/sessions.controllers.js'
import   { UsersController }  from './controllers/users.controllers.js'
import  PostsController  from './controllers/posts.controllers.js'


const routerSessions = express.Router()
const routerUsers = express.Router()
const routerComments = express.Router()
const routerPosts = express.Router()

//----------------------------------------------------------------


//-----------------------------------------------------------------
routerSessions.post('/sessions/login',SessionsController.login)



//-----------------------------------------------------------------
routerUsers.get('/users',UsersController.getUser)
routerUsers.post('/users',UsersController.createUser)

//-----------------------------------------------------------------
routerPosts.post('/posts',PostsController.createPost)
routerPosts.post('/posts/:pid',)




//-----------------------------------------------------------------
routerComments.get('/comments',(req,res,next) =>{res.send('Aun No implementado...')})






//-----------------------------------------------------------------
routerPosts.get('/inyeccion',async(req,res,next)=>{
    const {myQuery} = req.body
    try{
        console.log('myQuery',myQuery)
        const [result] = await database.query(myQuery)
        res.status(201).json({result: result})
    }catch(error){
        console.log(error)
    }
})


export { routerSessions, routerUsers, routerComments,routerPosts}