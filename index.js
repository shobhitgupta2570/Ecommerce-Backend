const express = require('express');
const server = express();
const mongoose = require('mongoose');
const productsRouters = require('./routes/Products');
const categoriesRouter = require('./routes/Categories');
const brandsRouter = require('./routes/Brands');
const cors = require('cors');

//middlewares

server.use(cors({
    exposedHeaders: ['X-Total-Count']
}));
server.use(express.json());
server.use('/products', productsRouters.router);
server.use('/categories', categoriesRouter.router);
server.use('/brands', brandsRouter.router);


main().catch(err=> console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    console.log('database connected');
}

server.get('/',(req, res)=>{
    res.json({status: 'success'});
})


server.listen(8080, ()=>{
    console.log('server started');
})