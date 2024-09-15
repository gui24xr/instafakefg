import express from 'express'
export const app = express()
import { database } from './config/database.js'

app.get('/',async (req,res,next)=>{

    const [result] = await database.query('SELECT * FROM users')
    console.log(result)
    res.send(result)
})

