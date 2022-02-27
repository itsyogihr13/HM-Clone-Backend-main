const mongoose = require('mongoose');

const kidSchema = new mongoose.Schema(
  {
    name:{type:String, required:true},
    brand:{type:String , required:true},
    image:{type:String, required:true},
    price:{type:Number, required:true},
    strikeOff:{type:Number, required:true},
  },{
    versionKey:false,
    timestamps:true,
  }
)

module.exports = mongoose.model('kids', kidSchema);