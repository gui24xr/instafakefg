import { app } from "./app.js";
import { connectToDatabase } from "./modulespaths.js"



const PORT = process.env.PORT || 8080


connectToDatabase()

app.listen(PORT, ()=>{console.log(`Server rodando en PORT ${PORT}`)})