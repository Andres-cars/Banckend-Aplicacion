const express = require('express')
const app = express()
const port = 3000

import { sequelize } from './db/conexion.js';

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


const main= async () =>{
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`)
      })
  } catch (error) {
      console.error(`Error ${error}`);
  }
}
main();
