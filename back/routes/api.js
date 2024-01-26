var express = require('express');
var router = express.Router();
var comentariosModel = require('./../models/comentariosModel');

router.get('/comentarios', async function(req, res, next) {
    let comentarios = await comentariosModel.getComentarios();

    res.json(comentarios);
});

module.exports = router;