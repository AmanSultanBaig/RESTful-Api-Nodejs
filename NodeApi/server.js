const express = require('express');
const app = express();
require('./db/dbconfig')

const productRoutes = require('./routes/products/product')

app.use(express.json())
app.use('/products', productRoutes)

let portNo = process.env.PORT || 4040;
app.listen(portNo, () => console.log('App is Runnning'))