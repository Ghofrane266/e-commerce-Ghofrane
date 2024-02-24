const express = require('express');
const cors = require('cors');
const PORT = 4000;
const app = express();
const productsRouter=require("./routes/product.router")


app.use(cors({origin:"http://localhost:3000"}))
app.use(express.json());
app.use("/api/v1/products",productsRouter)

app.listen(PORT, () => {
    console.log(`listing to http://localhost:${PORT}`);
})

