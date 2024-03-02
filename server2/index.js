const express=require("express")
const PORT=4001
const app=express()



app.listen(PORT,()=>console.log(`listing to http://localhost:${PORT}`))