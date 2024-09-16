import { Sequelize } from "sequelize";

//Creo la conexion a la base de datos.
const DB_NAME = 'railway'
const DB_USER = 'postgres'//'gui24'
const DB_PASSWORD = 'DOvWppNEVXeLxhJxPqIZoZpgxUImHwld'
const CONNECTION_VALUES = {host:'postgres.railway.internal',port:'5432',dialect:'postgres',  dialectOptions: {multipleStatements: true }}

//Creo la referencia a mi base de datos.
export const database = new Sequelize(DB_NAME,DB_USER,DB_PASSWORD,CONNECTION_VALUES)
//Inicio sesion en ella.

  export function connectToDatabase(){
    database.sync()
    database.authenticate()
    .then(console.log('Conectado a la base de datos OK en railway... !!!',))
    .catch(res => console.log('Falla al conectarse en railway!!!', res))
}