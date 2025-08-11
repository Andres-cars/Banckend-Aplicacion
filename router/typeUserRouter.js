import express from 'express';
import { getTypeUsers,createTypeUsers,updateTypeUsers,deleteTypeUsers} from '../controller/typeUserControlller.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.get('/type/users',verifyToken, getTypeUsers); // obtener todos los tipos de usuarios
rotuer.post('/type/users', createTypeUsers); // registrar tipo de usuario
rotuer.put('/type/users/:id',verifyToken, updateTypeUsers); // actualizar tipo de usuario
rotuer.delete('/type/users/:id', verifyToken,  deleteTypeUsers); // eliminar tipo de usuario


export default rotuer;