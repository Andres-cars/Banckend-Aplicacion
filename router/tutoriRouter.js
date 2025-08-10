import express from "express";
import { createTutoring, getTutorings, updateTutoring, deleteTutoring, getWeeklyReport } from "../controller/tutoringController.js";

const rotuer = express.Router();


rotuer.post("/registrar", createTutoring); //regitra tutoria 
rotuer.get("/obtener", getTutorings); // obtener todas las tutorías
rotuer.patch("/:id", updateTutoring); // actualizar tutoría
rotuer.delete("/:id", deleteTutoring); // eliminar tutoría
rotuer.get("/report/:student_id", getWeeklyReport); // reporte semanal filtrado por estudiante

export default rotuer;
