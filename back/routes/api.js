var express = require('express');
var router = express.Router();
var comentariosModel = require('./../models/comentariosModel');
const nodemailer = require('nodemailer');

router.get('/comentarios', async function (req, res, next) {
    let comentarios = await comentariosModel.getComentarios();

    res.json(comentarios);
});

router.post('/contact', async (req, res) => {

    const mail = {
        to: 'elisamele08@gmail.com',
        subject: 'Contacto Web',
        html: `${req.body.name} se contacto a traves de la web 
        y quiere más información a este correo: ${req.body.email} 
        <br> Además, hizo el siguiente comentario: ${req.body.message} 
        <br> Su tel es: ${req.body.telephone}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Your message was sent successfully.'
    });
});

module.exports = router;