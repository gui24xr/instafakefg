import { Sequelize } from "sequelize";

//Creo la referencia a mi base de datos.
export const database = new Sequelize('postgresql://postgres:MIeIguVTiVTpjBgMwDBlLoDWdooFzsWY@junction.proxy.rlwy.net:54136/railway')
//Inicio sesion en ella.

  export async function connectToDatabase(){
    try {
      database.sync() //CREA, SI NO EXISTEN, LAS tablas tal cual las pide el modelo de sequelize.
      await database.authenticate();
      console.log('Estamos usando la base de datos en railway');
    } catch (error) {
      console.error('Unable to connect to the database en railway:', error);
    }
}