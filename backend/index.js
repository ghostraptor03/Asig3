const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product');  // Assuming a Mongoose named Product
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/productsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Create a new product
app.post('/products', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.send(product);
});

//Read all products
app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

// Update an existing product
app.put('/products/:id', async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    res.send(product);
});

// Delete a product
app.delete('/products/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.send({ message: 'Product deleted' });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
