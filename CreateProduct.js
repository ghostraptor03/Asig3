import React, { useState } from 'react';
import axios from 'axios';

function CreateProduct() {
    const [product, setProduct] = useState({
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
        rating: { rate: 0, count: 0 }
    });

    const handleChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/products', product);
        console.log(response.data);
    }

    return (
        <div>
            <h2>Create Product</h2>
            <form onSubmit={handleSubmit}>
                {}
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default CreateProduct;
