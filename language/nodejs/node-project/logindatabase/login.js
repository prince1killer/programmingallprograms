


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "pranav",
  password: "root"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // /*Create a database named "mydb":*/
  con.query("CREATE DATABASE hellworld", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

        