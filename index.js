const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

var Openpay = require('openpay');

var openpay = new Openpay('m9wcsjwhqplsq01chivl', 'sk_bc7eb07a71574342954b94de857a84a9');


var newCustomer = {
  "name":"John",
  "email":"johndoe@example.com",
  "last_name":"Doe",
  "address":{
    "city":"Queretaro",
    "state":"Queretaro",
    "line1":"Calle Morelos no 10",
    "line2":"col. san pablo",
    "postal_code":"76000",
    "country_code":"MX"
	},
  "phone_number":"44209087654"
};


app.use(bodyParser.urlencoded({}));
app.use(bodyParser.json());
app.use(cors());



app.post('/', (req, res) => {
	
	
	let params = req.body;
	// let {} = ;
	
	
	console.log("Params", params);
	
	// openpay.customers.create(newCustomer, function(error, body) {
    // error;    // null if no error occurred (status code != 200||201||204)
    // body;     // contains the object returned if no error occurred (status code 
		// console.log("Body", body );
		// console.log("Error", error );
		res.send({"params": params});
	// });
	
});

// app.get('/', (req, resp) => {
	
	
	// console.log("Get route /");
	
	// openpay.customers.create(newCustomer, function(error, body) {
    // error;    // null if no error occurred (status code != 200||201||204)
    // body;     // contains the object returned if no error occurred (status code == 200||201||204)
		// console.log("Customer", newCustomer );
		// console.log("Body", body );
		// console.log("error", error );
		
	// });
	
// });


app.listen(3000, () => {
	
	console.log("Corriendo Servidor");
});
