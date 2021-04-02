const { Router } = require('express');
const router = Router();
const {checkLogin} = require('../js/middlewares/middles');
const { TbUsuario, TbPreguntas, TbResultado} = require('../data/models/userdb');

router
.get('/',  async (req, res) => { res.render('loging.ejs'); })
.get('/register',  async (req, res) => { res.render('register.ejs'); })
.get('/logout', async (req, res) => { req.session.user = null; res.redirect('/'); })
.get('/agregpreg',checkLogin,  async (req, res) => {console.log('***** Ingresa a Nueva Pregunta'); const user= req.session.user; res.render('new_question.ejs');})
   
   .get('/main',checkLogin,  async (req, res) => {
      console.log('***** Ingresa a Main');
      const usuarios = await TbUsuario.findAll();
      const preguntas = await TbPreguntas.findAll();
      const resultados = await TbResultado.findAll();
      res.render('main.ejs',{usuarios,preguntas,resultados});
   })

   .get('/letsplay',checkLogin,  async (req, res) => {
      console.log('***** Ingresa a Jugar');
      const user= req.session.user;
      const preguntas = await TbPreguntas.findAll();
      res.render('lets_play.ejs',{preguntas});
   });

   //* ruta de testeo

   router.get('/testeo', async (req, res) => { console.log('***** Ingresa a testear'); const user= req.session.user; const preguntas = await TbPreguntas.findAll(); res.render('testeo.ejs',{preguntas});});

   module.exports = router;
