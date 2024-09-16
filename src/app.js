import express from 'express'
export const app = express()
import { database, routerSessions, routerUsers, routerPosts, routerComments } from './modulespaths.js'


//Middlewares
app.use(express.json())


//routes
app.use('/api', routerSessions)
app.use('/api',routerUsers)
app.use('/api', routerComments)
app.use('/api',routerPosts)

app.get('/',async (req,res,next)=>{

    const [result] = await database.query('SELECT * FROM users')
    console.log(result)
    res.send(result)
})
