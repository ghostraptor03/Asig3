const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product');
const app = express();
app.use(express.json());


mongoose.connect('mongodb://localhost/reactdata');


app.post('/products', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
});


app.get('/products/:id?', async (req, res) => {
    if(req.params.id) {
        const product = await Product.findById(req.params.id);
        if(!product) return res.status(404).send('Product not found');
        return res.send(product);
    }
    const products = await Product.find();
    res.send(products);
});


app.put('/products/:id', async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, { price: req.body.price }, {new: true});
    if(!product) return res.status(404).send('Product not found');
    res.send(product);
});


app.delete('/products/:id', async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    if(!product) return res.status(404).send('Product not found');
    res.status(204).send();
});


const PORT = 5500;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
