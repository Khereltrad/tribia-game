const { Router } = require('express');
const { TbUsuario, TbPreguntas, TbResultado} = require('../data/models/userdb');
const session = require("express-session");
const bcrypt = require('bcrypt');
const flash =  require('connect-flash');
const router = Router();

router
.post('/datosregistro', async (req, res) => { 

   try {
      const password_encrypted = await bcrypt.hash(req.body.password, 10);
      
      const usuario = await TbUsuario.findAndCountAll();
      let rol_usuario = "USUARIO";
      if(usuario.count==0){ rol_usuario="ADMIN"};
      const user = await TbUsuario.create({     
         name: req.body.name,
         lastname: req.body.lastname,
         rol: rol_usuario,
         email: req.body.email,
         password: password_encrypted
      });
   } 
   catch(err) {  // En el caso de algún error, guardamos los errores en "errors", y redirigimos al formulario
      console.log(err);
      // for (var key in err.errors) { req.flash('errors', err.errors[key].message);}
      return res.redirect('/');
   }
   res.redirect('/chat');
})
.post('/datosloging', async (req, res) => {

   const errors   =  req.flash("errors");
   const mensajes =  req.flash("mensaje");

   const user = await TbUsuario.findOne({where: {email: req.body.email}});
   if (user == null) {
      console.log('Intento de loging con datos errados -EM');
      req.flash('errors', 'Usuario inexistente o contraseña incorrecta');
      return res.redirect('/');      
   }

   let isCorrect = await bcrypt.compare(req.body.password, user.password);
   if (isCorrect == false) {
      console.log('Intento de loging con datos errados -PW');
      req.flash('errors', 'Usuario inexistente o contraseña incorrecta');
      return res.redirect('/');
   }
   req.session.user = user;
   console.log(`Logeo exitoso del `+user.rol+` `+user.name);
   res.redirect('/main');
 })
.post('/nueques', async (req,res) =>{

   try {
      const errors   =  req.flash("errors");
      const mensajes =  req.flash("mensaje");

      const new_mensaje = await TbPreguntas.create({
         question    : req.body.question,
         correct     :  req.body.correct,
         fakeansw    :  req.body.fakes,
         falseans    :  req.body.false,   
         UsuarioId   : req.session.user.id,
      });
   } catch(err) {
      console.log(err);
      // for (var key in err.errors) { req.flash('errors', err.errors[key].message);}
      return res.redirect('/main');
   }   
   res.redirect('/agregpreg');
})
.post('/evaluating', async (req,res) =>{

   try {
      const errors   =  req.flash("errors");
      const mensajes =  req.flash("mensaje");
      
      let bien =0; 
      let mal  =0;
      let prom =0;      
      let resu1 = req.body.answ1;
      let resu2 = req.body.answ2;
      let resu3 = req.body.answ3;
      
      const compare1 = await TbPreguntas.findOne({where: {correct: req.body.answ1}});
      const compare2 = await TbPreguntas.findOne({where: {correct: req.body.answ2}});
      const compare3 = await TbPreguntas.findOne({where: {correct: req.body.answ3}});
      
      if (compare1==null) {mal++;};
      if (compare2==null) {mal++;};
      if (compare3==null) {mal++;};
      
      bien = 3-mal;

      if(bien==0){prom=0;}
      if(bien==1){prom=33;}
      if(bien==2){prom=66;}
      if(bien==3){prom=100;}

      const new_evaluate = await TbResultado.create({
         correct     :  bien,
         average     :  prom,
         name        : req.session.user.name,
         UsuarioId   : req.session.user.id,
      });
   } catch(err) {
      console.log(err);
      // for (var key in err.errors) { req.flash('errors', err.errors[key].message);}
      return res.redirect('/main');
   }   
   res.redirect('/main');
})

module.exports = router;