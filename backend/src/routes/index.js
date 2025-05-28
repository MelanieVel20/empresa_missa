const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { titulo: 'Página de Inicio - EMPRESA MISSA' });
});

module.exports = router;
