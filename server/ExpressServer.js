const express = require('express');
const cors = require('cors');
const PORT = 4000;
const app = express();


let products = require("./data.json");
app.use(cors())
app.use(express.json());

app.get("/test", (req, res) => {
    res.send("Hello express server");
});
app.get("/products", (req, res) => {
    res.send(products)
});
app.get("/product/:id",(req,res)=>{
    const{id}=req.params;
    let myProduct=products.find((e)=>e.id===+id);
    if(myProduct) res.send(myProduct);
    else res.status(400).send("id not found !")
});
app.post("/search", (req, res) => {
    const { text } = req.body;
    res
        .status(200)
        .send(
            products.filter(
                (elem) =>
                    elem.name.toUpperCase().includes(text.toUpperCase()) || elem.description.toUpperCase().includes(text.toUpperCase())
            )
        )
});

app.post("/products", (req, res) => {
    products.push(req.body);
    res.status(201).send(products);
})
app.delete("/delete/:id", (req, res) => {
    let id = +req.params.id
    console.log(id, "my id sent from params");
    let newProducts = products.filter((e) => e.id !== id)
    if (JSON.stringify(newProducts) !== JSON.stringify(products)) {
        products = newProducts
        res.status(202).send(products)
    }
    else {
        res.status(400).send("id not found")
    }
}

)
app.listen(PORT, () => {
    console.log(`listing to http://localhost:${PORT}`);
})

