const { hasMany,belongsTo } = require('sequelize');
const Sequelize = require('sequelize');
const sql = new Sequelize('tibia', 'root','', { host: 'localhost', dialect: 'mysql'});

const TbUsuario = sql.define('Usuarios',{
   id:         {type: Sequelize.INTEGER ,primaryKey: true,autoIncrement:true},
   name:       {type: Sequelize.STRING,allowNull:false,validate:{notNull:{msg:'Debe ingresar un Nombre'},len:{args:[3],msg:'El largo del nombre debe ser de al menos 3 digitos'}}},
   lastname:   {type: Sequelize.STRING,allowNull:false,validate:{notNull:{msg:'Debe ingresar un Apellido'},len:{args:[4],msg:'El largo del apellido debe ser de al menos 4 digitos'}}}, 
   rol:        {type: Sequelize.STRING,allowNull:false,defaultValue:"Normal"},
   email:      {type: Sequelize.STRING,allowNull:false,unique:true,validate:{notNull:{msg:'Debe ingresar un Email'},len:{args:[6],msg:'El largo del correo debe ser de al menos 6 digitos'},isEmail:{msg:'Favor revise si el correo este bien escrito'}}},
   password:   {type: Sequelize.STRING,allowNull:false,validate:{notNull:{msg:'Debe ingresar una Contraseña'},len:{args:[6],msg:'El largo de la contraseña  debe ser de al menos 6 digitos'}}}         
},{ timestramps: true });

const TbPreguntas = sql.define('Preguntas',{
   id:          {type: Sequelize.INTEGER ,primaryKey: true,autoIncrement:true},
   question:    {type: Sequelize.STRING,allowNull:false,validate:{notNull:{msg:'Falta ingresar pregunta'},len:{args:[15]}}},
   correct:     {type: Sequelize.STRING,allowNull:false,validate:{notNull:{msg:'Falta ingresar mensaje correcto'},len:{args:[1]}}},
   fakeansw:    {type: Sequelize.STRING,allowNull:false,validate:{notNull:{msg:'Falta ingresar mensaje fake'},len:{args:[1]}}},
   falseans:    {type: Sequelize.STRING,allowNull:false,validate:{notNull:{msg:'Falta ingresar mensaje falso'},len:{args:[1]}}},
},{ timestramps: true });

const TbResultado = sql.define('Resultados',{
   id:          {type: Sequelize.INTEGER ,primaryKey: true,autoIncrement:true},
   correct:     {type: Sequelize.INTEGER,allowNull:false,validate:{notNull:{msg:'Falta ingresar mensaje correcto'},len:{args:[1]}}},
   average:     {type: Sequelize.INTEGER,allowNull:false,validate:{notNull:{msg:'Falta ingresar mensaje fake'},len:{args:[1]}}},
   name:        {type: Sequelize.STRING,allowNull:false,validate:{notNull:{msg:'Debe ingresar un Nombre'},len:{args:[3],msg:'El largo del nombre debe ser de al menos 3 digitos'}}},
},{ timestramps: true });

TbUsuario.hasMany(TbPreguntas)
TbPreguntas.belongsTo(TbUsuario)
TbResultado.belongsTo(TbUsuario)

sql.sync().then(() =>{console.log('***** Tablas sincronizada');});
module.exports = { TbUsuario,TbPreguntas,TbResultado};