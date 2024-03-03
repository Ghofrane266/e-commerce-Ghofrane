const connection = require("../model/index");


const getAllPosts = (req, res) => {
  let sql = "select * from POSTS";
  connection.query(sql, (err, result) => {
    if (err) console.log(err);
    else res.status(200).send(result);
  });
};


const addPost = (req, res) => {
  let sql = "insert into POSTS set ?";
  connection.query(sql, req.body, (err, result) => {
    if (err) console.log(err);
    else res.status(201).send(result);
  });
};

module.exports = { getAllPosts, addPost };