var mysql = require('mysql');
const express = require('express');

/* TO ENABLE TRADITIONAL PASSWORD CONNECTIONS IN RECENT MYSQL DATABASES RUN THIS IN YOUR CLIENT:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'S!mpl312';
flush privileges;
*/
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "S!mpl312",
    database: "mydb"
});

function execute(sql, callback) {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        con.query(sql, function (err, result) {
            if (err) throw err;
            callback(JSON.stringify(result, undefined, 4));
        });
    });
}

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.header('Content-Type', 'application/json');
    execute("SELECT id, name FROM category", data => res.send(data));
});

const port = 3000;
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});