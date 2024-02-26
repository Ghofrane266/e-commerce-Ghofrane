const express = require('express');
const cors = require('cors');
const PORT = 4000;
// const path=require("path")
const app = express();
require('dotenv').config();
require("./model/index")
const productsRouter=require("./routes/product.router")

// console.log(process.env.allowedAdress);
app.use(cors({origin:process.env.allowedAdress}))
app.use(express.json());

app.use(express.static('./server/publics'));

app.use("/api/v1/products",productsRouter)

app.listen(PORT, () => {
    console.log(`listing to http://localhost:${PORT}`);
})

