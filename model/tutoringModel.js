import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import { userModel } from "./userModel.js";

export const tutoringModel = sequelize.define("tutorings", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  topic: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("pendiente", "confirmada", "cancelada"),
    defaultValue: "pendiente",
  },
}, {
  timestamps: false,
});

// Relaciones: estudiante y profesor son usuarios, pero se diferencian por typeUser
userModel.hasMany(tutoringModel, { foreignKey: "student_id", as: "tutoriasSolicitadas" });
tutoringModel.belongsTo(userModel, { foreignKey: "student_id", as: "estudiante" });

userModel.hasMany(tutoringModel, { foreignKey: "teacher_id", as: "tutoriasAsignadas" });
tutoringModel.belongsTo(userModel, { foreignKey: "teacher_id", as: "profesor" });
