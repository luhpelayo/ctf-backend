const express = require('express');
const bodyParser = require('body-parser');
const contactoRoutes = require('./routes/contactosRoute.js');
const tasksRoute = require('./routes/taskRoute');
const authRoute = require('./routes/authRoute');
const tasktypeRoute = require('./routes/taskTypeRoute.js');
const categoriaRoute = require('./routes/categoriaRoute');
const preguntaRoute = require('./routes/preguntaRoute');
const submisionRoute = require('./routes/submisionRoute');
const perfilUsuarioRoute = require('./routes/perfilUsuarioRoute');
const dificultadRoute = require('./routes/dificultadRoute');
const rolRoute = require('./routes/rolRoute');
const sequelize = require('./db.js');
const cors = require('cors'); 
const helmet = require('helmet'); // Agrega el paquete helmet para encabezados de seguridad

const app = express();
const PORT = process.env.PORT || 8800;

const corsOptions = {
  origin: process.env.URL_FRONTEND, // Dominio permitido
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
};
// Importa el script de inicialización de datos
const initData = require('./initData.js');

// Ejecuta el script de inicialización de datos
initData();

app.use(cors(corsOptions));
app.use(helmet()); // Agrega encabezados de seguridad
app.use(bodyParser.json());
app.use('/contacto', contactoRoutes);
app.use('/task', tasksRoute);
app.use('/auth', authRoute);
app.use('/tasktype', tasktypeRoute);
app.use('/categoria', categoriaRoute);
app.use('/pregunta', preguntaRoute);
app.use('/submision', submisionRoute);
app.use('/dificultad', dificultadRoute);
app.use('/perfilUsuario', perfilUsuarioRoute);
app.use('/rol', rolRoute);


sequelize
  .sync()
  .then(() => {
    console.log('Base de datos conectada y sincronizada.');
    app.listen(PORT, () => {
      console.log(`Servidor Express escuchando en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });
