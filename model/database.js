var mysql = require('mysql2');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"fullstack_project",
  port:'3306'
});

// connection.query('insert into student values(tharani,123)',(err,results)=>{
//     if(err) throw err;
//     if(results){
//         console.log("Values Inserted");
//     }
// })

module.exports=con;