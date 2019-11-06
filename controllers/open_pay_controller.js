const Openpay = require('openpay');
const connection = require('../connection');

require('dotenv').config();

const index = (req, res) => {
    const query = 'SELECT User FROM user'; // query example OK
    connection.query(query, (err, results, fields) => {
        if (err) return res.status(500).send({ message: `Error: ${err}` });
        if (!results) return res.status(404).send({ message: 'No hay registros', code: 404 });
        return res.status(200).send({ code: 200, results });
    });

}

const createCustomer = (req, res) => {
    const openpay = new Openpay(process.env.MERCHANT_ID, process.env.PRIVATE_KEY);
    let newCustomer = { ...req.body };
    const query = `INSERT INTO Client (name, rfc, company, email) VALUES ("${newCustomer.name}", "${newCustomer.rfc}", "${newCustomer.company}", "${newCustomer.email}")`;

    connection.query(query, (err, results, fields) => {
        if (err) return res.status(500).send({ message: `Error: ${err}` });
        if (!results) return res.status(404).send({ message: 'No hay registros', code: 404 });
        return res.status(200).send({ code: 200, results, fields });
    })


    //openpay.customers.create(newCustomer, function(err, body) {
    // error;    // null if no error occurred (status code != 200||201||204)
    // body;     // contains the object returned if no error occurred (status code == 200||201||204)
    // if (err) return res.status(500).send({message: err, code: 500});
    // return res.status(200).send({message: 'Creado correctamente', customer: body});
    // });

    // var newCustomer = {
    //     "name": "John",
    //     "email": "johndoe@example.com",
    //     "last_name": "Doe",
    //     "address": {
    //         "city": "Queretaro",
    //         "state": "Queretaro",
    //         "line1": "Calle Morelos no 10",
    //         "line2": "col. san pablo",
    //         "postal_code": "76000",
    //         "country_code": "MX"
    //     },
    //     "phone_number": "44209087654"
    // };
}

module.exports = {
    index,
    createCustomer
}