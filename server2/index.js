
const express = require("express")
const postRouter = require("./router/post.router")
const PORT = 4001
const app = express()
app.use(express.json())
app.use("/post", postRouter)




app.listen(PORT, () => console.log(`listing to http://localhost:${PORT}`))