const express = require('express');
const openPayController = require('../controllers/open_pay_controller');
const router = express.Router();

router.get('/customers', openPayController.index);
router.post('/customer', openPayController.createCustomer);


module.exports = router;


