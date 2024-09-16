import express from 'express'
//import { CommentsController,PostsController,UsersController, SessionsController } from './modulespaths.js'


import   { UsersController }  from './controllers/users.controllers.js'


const routerSessions = express.Router()
const routerUsers = express.Router()
const routerComments = express.Router()
const routerPosts = express.Router()


routerSessions.get('/sessions',(req,res,next) =>{res.send('Aun No implementado...')})


routerUsers.get('/users',UsersController.getUser)
routerUsers.post('/users',UsersController.createUser)


routerComments.get('/comments',(req,res,next) =>{res.send('Aun No implementado...')})


routerPosts.get('/posts',(req,res,next) =>{res.send('Aun No implementado...')})


export { routerSessions, routerUsers, routerComments,routerPosts}