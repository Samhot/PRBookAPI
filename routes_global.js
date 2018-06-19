var bodyParser = require('body-parser');
var mysql = require('mysql');

// connection configurations
const Server = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'abcd4ABCD',
    database: 'prbook',
    // port: 8888
});

// connect to database
Server.connect(function(err){
    if (err) throw err;
    console.log("Connected global");
})

