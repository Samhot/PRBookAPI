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

// Search for todos with ‘bug’ in their name
exports.searchGlobal = function (req, res) {
    let keyword = req.params.keyword;
    Server.query("SELECT * FROM todos WHERE name LIKE ? ", ['%' + keyword + '%'], function (error, results, fields) {
        if (error) throw error;
        return res.json(results);
    });
};