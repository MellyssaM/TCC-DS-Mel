const con = require('../connect')

const create = (req, res) => {
    const { nome_cli, email, senha } = req.body;
    con.query('INSERT INTO cli(nome_cli, email, senha)VALUES(?,?,?)', [nome_cli, email, senha], (err, result) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(result);
        }
    });
}

module.exports = {
    create
}