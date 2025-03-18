const mysql = require('mysql')

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    database: 'DigitalD'
});

module.exports = con;