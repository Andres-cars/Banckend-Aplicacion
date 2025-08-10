import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";

export const personModel = sequelize.define("persons",{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER,
    },
    ci: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
},
{
    timestamps:false
}
)