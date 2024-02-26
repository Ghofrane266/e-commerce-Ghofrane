const mongoose=require("mongoose")
const db=require("./index")


const productschema=new mongoose.Schema({
    id:Number,
    name:String,
    url:String,
    description:String,
    price:Number
})

const Product=mongoose.model("products",productschema)

module.exports={Product}