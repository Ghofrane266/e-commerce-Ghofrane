const mysql = require("mysql2")

const config = {
    host: 'localhost',
    user: 'root',
    database: 'PFESQL',
    password: "123456789gc"
}

const connection = mysql.createConnection(config)

connection.connect((err) => {
    if (err) console.log(err)
    else console.log("db connected");
})


module.exports = connection