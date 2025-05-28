const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar handlebars
app.engine('hbs', exphbs.engine({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, '../../frontend/views/layouts'),
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../../frontend/views'));

// Archivos estáticos
app.use('/assets', express.static(path.join(__dirname, '../../frontend/assets')));

// Rutas
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
