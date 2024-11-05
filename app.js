const express = require('express');
const app = express();
const UserRouter = require('./routes/user');
const CategoryRouter = require('./routes/category');
const connectbd = require('./db/connection');
require('dotenv/config');




connectbd();

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log('app started');
});


app.use('/user', UserRouter);
app.use('/category', CategoryRouter);