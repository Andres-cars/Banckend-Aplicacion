import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { typeUserModel } from "./typeUserModel.js";
import { personModel } from "./personModel.js";


export const userModel = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
  },
  {
    timestamps: false,
  }
);

typeUserModel.hasMany(userModel, { foreignKey: "typeusers_id" });
userModel.belongsTo(typeUserModel, { foreignKey: "typeusers_id" });
personModel.hasMany(userModel, { foreignKey: "person_id" });
userModel.belongsTo(personModel, { foreignKey: "person_id" });