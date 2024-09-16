import { database } from "../../modulespaths.js";
import { DataTypes } from "sequelize";

export const UsersModel = database.define("users",{
    userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    userName: {
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    recoveryPasswordCode: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0,
            max: 999999,
        },
        allowNull: true, // Cambia esto a `allowNull: false` si es obligatorio
    },
    privateProfile: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: true,
    },
    lastName: {
        type: DataTypes.STRING(30),
        allowNull: true,
    },
    age: {
        type: DataTypes.INTEGER,
        validate: {
            min: 18,
            max: 120,
        },
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    
},
{tableName:'users', timestamps: false})


/*

export const SedesEstablecimientoModel = myDB.define('sedes_establecimiento',{
    id_sede_establecimiento:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nombre_sede:{
        type: DataTypes.STRING,
        allowNull: true
    },
    en_servicio:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }

},{tableName:'sedes_establecimiento',timestamps:false})
*/