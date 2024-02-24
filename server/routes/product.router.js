const productsRouter = require("express").Router()

let products = require("../data.json");
const {selectAll,findOne,search,createProduct,deleteProduct}= require("../controller/product.controller")

productsRouter.get("/",selectAll);
productsRouter.get("/:id",findOne);
productsRouter.post("/search",search);
productsRouter.post("/",createProduct);
productsRouter.delete("/:id",deleteProduct);
   




module.exports=productsRouter;