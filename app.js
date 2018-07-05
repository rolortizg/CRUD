const express = require('express');//conectar al servidor
const path = require('path');//asegurar que recibe del sitio correcto
const mongoose = require('mongoose');//conectar con bd
const port = 3000;
require('hbs');//para aplicar templates

//para conectar mongoose a la base de datos
mongoose.connect('mongodb://localhost:27017/detox',{useNewUrlParser: true},(err)=> {
  if (err) return console.log('Error: ', err)
  console.log("Conectado a la bd")
});

//para usar express
const app = express();
app.use(express.static(path.join(__dirname, 'public')))

//para usar HBS
app.set('view engine', 'hbs');
app.set('views',__dirname + '/views')

//rutas para hacer el CRUD
app.get('/',(req,res)=>{
    res.render('home');
})

const foodRoutes = require('./routes/food');
app.use('/food', foodRoutes);




app.listen(port, ()=> {
  console.log("Escuchando a la bd...")
});