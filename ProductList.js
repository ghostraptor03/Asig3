import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState(null);
    const [productId, setProductId] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('http://localhost:5000/products');
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const handleSingleProduct = async () => {
        const { data } = await axios.get(`http://localhost:5000/products/${productId}`);
        setSingleProduct(data);
    }

    return (
        <div>
            <h2>Product List</h2>
            {/* Display products here */}
            <h2>Single Product Details</h2>
            {/* Display single product here */}
        </div>
    );
}

export default ProductList;
