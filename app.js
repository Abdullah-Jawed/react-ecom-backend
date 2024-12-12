const express = require('express');
const app = express();
const UserRouter = require('./routes/user');
const CategoryRouter = require('./routes/category');
const ProductRouter = require('./routes/products');
const connectbd = require('./db/connection');
const cors = require('cors');

require('dotenv/config');

app.use(cors());
app.options('*', cors());


connectbd();

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log('app started');
});


app.use('/user', UserRouter);
app.use('/category', CategoryRouter);
app.use('/products', ProductRouter);