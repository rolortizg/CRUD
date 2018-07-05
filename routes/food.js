const express = require('express');
const router = express.Router();
const Food = require('../models/Food')

//update
router.get('/update/:id',(req,res)=>{
    Food.findByIdAndUpdate(req.params.id, {taste:'Delicious'},(err,food)=>{
      if(err) return res.send('error' + err);
      res.send('food modificada');
    })
})
//delete
router.get('/:id/delete',(req,res)=>{
    Food.findByIdAndRemove(req.params.id, (err)=>{
      res.send('borrando la food' + req.params.id);
    })
})

//create
router.get('/new',(req,res)=>{
    Food.create({
      name:'Jamon',
      calories:0,
      price:50,
      taste:"lo mejor",
      hasSugar:false,
      ingredients:['verdura','quinoa']
    })
    .then(foods=>{
      res.send("comida creada papi");
    })
    .catch(err=>{
      res.send(err);
    });
});



router.get('/',(req,res)=>{
  
  Food.find({}, (err,items)=> {
    res.render('food/lista',{items});
  });  
  
});

module.exports = router;