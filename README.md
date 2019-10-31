# openpay_node
 
## Basic routes

List customers
```javascript
GET: api/v1/customers  // SELECT * FROM customers_table
```

Create new customer
```javascript
POST: api/v1/customer  // INSERT INTO customers_table
```


CHANGE .env FILE
```javascript
MERCHANT_ID=your_merchant_id
PRIVATE_KEY=yout_private_key
HOST=localhost
USER=your_mysql_user
PASSWORD=your_mysql_pswd
DB=open_pay_DB
```