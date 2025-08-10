import express from 'express';
import { login,updateUsersPassword, updateUsersEmail, getUsers,createUsers,updateUsers,deleteUsers,getOneUser} from '../controller/userController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/user',verifyToken, getUsers); // obtener todos los usuarios
rotuer.get('/user/:id',verifyToken, getOneUser); // obtener un usuario por ID
rotuer.post('/register', createUsers); // registrar usuario
rotuer.put('/user/:id',verifyToken, updateUsers); // actualizar usuario
rotuer.delete('/user/:id', verifyToken, deleteUsers); // eliminar usuario

rotuer.post('/login', login); // iniciar sesión
rotuer.put('/user/email/:id',verifyToken, updateUsersEmail); // actualizar email de usuario
rotuer.put('/user/password/:id',verifyToken, updateUsersPassword); // actualizar contraseña de usuario
export const RouterUsuer = rotuer;