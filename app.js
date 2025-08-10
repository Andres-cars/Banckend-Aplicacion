
import express from 'express';
import cors from "cors";
import { PORT } from './config/config.js';
import rotuerTypeUsers from './router/typeUserRouter.js';
import  { RouterUsuer } from './router/userRouter.js';
import  personrouter  from './router/PersonRouter.js';
import { sequelize } from "./db/conexion.js";
import tutoriRouter  from './router/tutoriRouter.js';

// imaganes
//import path from 'path';
//import { fileURLToPath } from 'url';

const _PORT = PORT || 3000;
const app = express();


// imaganes
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
//app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//app.use('/api/imagenes', express.static('/imagenes/personas'));

app.use('/api', rotuerTypeUsers);
app.use('/api', RouterUsuer);
app.use('/api', personrouter);
app.use('/api', tutoriRouter);



const main = async () => {
    try {
        await sequelize.authenticate();
        console.log('Base de datos conectada.');
        await sequelize.sync({ alter: false })
        app.listen(_PORT, () => {
            console.log(`Servidor corriendo en el puerto => ${_PORT}`);
        });
    } catch (error) {
        console.log(`Error ${error}`);
    }
}
main();