
const express = require('express');
const cors = require('cors');
const app = express();
const open_pay_routes = require('./routes/open_pay_routes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.use('/api/v1', [open_pay_routes]);



module.exports = app;