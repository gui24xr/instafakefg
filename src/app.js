import express from 'express'
export const app = express()
import { database } from './config/database.js'


//Middlewares
app.use(express.json())

app.get('/',async (req,res,next)=>{

    const [result] = await database.query('SELECT * FROM users')
    console.log(result)
    res.send(result)
})

app.get('/inyeccion',async (req,res,next)=>{

    const {userData} = req.body

    console.log(req.body)
    try{
        const [result] = await database.query(`SELECT * FROM FELIPA WHERE nombre = ${userData}`)
        console.log(result)
        res.send(result)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
    
})


app.get('/inyeccion2',async (req,res,next)=>{

    const {userData} = req.body

    console.log(req.body)
    try{
        const [result] = await database.query('SELECT * FROM users WHERE nombre = $1;', [userData]);


        console.log(result)
        res.send(result)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
    
})