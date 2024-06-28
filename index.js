import express from 'express';

const app = express();

/**
 * Manejador de la ruta '/' que devuelve 'Hello World!'
 * @param {request} req - Objeto de solicitud de express
 * @param {response} res - Objeto de respuesta de express
 */
app.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
 * Manejador para la ruta '/saludo/:nombre' que responde con un saludo personalizado
 * @param {request} req - Objeto de solicitud
 * @param {response} res - Objeto de respuesta
 */
app.get("/saludo/:nombre", (req, res ) => {
  const nombre = req.params.nombre
  res.send(`hola ${nombre}`);
});

/**
 * Inicia el servidor express en el puerto 3000
 * @param {number} port - puerto en el que el servidor iniciara
 * @param {function} callback - funcion de devolucion de llamada que maneja el inicio del servidor
 */
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
