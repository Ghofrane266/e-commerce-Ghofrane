const data = require("../data.json")
const connection = require("./index")

const insertAll = async ()=> {
    for(element of data ){
    let sql = "insert into POSTS set ?";
    connection.query(sql, element, (err, result) => {
      if (err) console.log(err);
      else console.log("seeded");;
    })
}
}

insertAll();
