const app = require('./app');
const connection = require('./connection');

connection.connect((err) => {
	if (err) console.log(`Error al conectar: ${err.stack}`);
	app.listen(3000, () => {
		console.log("Corriendo Servidor");
	});

});

