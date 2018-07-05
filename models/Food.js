const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name:{
      type:String,
      required:true,
    },
    calories:Number,
    ingredients:[String],
    hasSugar:Boolean,
    price:Number,
    taste:String,
    tipo:{
      type:String,
      enum:['dessert','plate','exotic'],
      defaut:'plate'
    },
},{
    timestamps:{
      createdAt:'created_at',//se guardara la info de forma automatica
      updatedAt:'updated_at'
  }
});

module.exports = mongoose.model('Food',foodSchema);