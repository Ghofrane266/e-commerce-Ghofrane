const {Product}=require("../model/models");


const selectAll= async (req, res) => {
    try {
       const response= await Product.find()
       res.send(response)
    } catch (error) {
        console.log(error);
    }};
 
 const findOne= async(req,res)=>{
    try {
        const found =await Product.findOne({id:+req.params.id});
        res.send(found);
    } catch (error) {
        console.log(error);
    }
}
const search=(req, res) => {
    const { text } = req.body;
    res
        .status(200)
        .send(
            products.filter(
                (elem) =>
                    elem.name.toUpperCase().includes(text.toUpperCase()) || elem.description.toUpperCase().includes(text.toUpperCase())
            )
        )
}
const createProduct=(req, res) => {
    products.push(req.body);
    res.status(201).send(products);
};

const deleteProduct=(req, res) => {
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

module.exports={selectAll,findOne,search,createProduct,deleteProduct}