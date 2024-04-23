import React, { useState } from 'react';
import axios from 'axios';

function UpdateProduct() {
    const [productId, setProductId] = useState('');
    const [price, setPrice] = useState(0);

    const updatePrice = async () => {
        const { data } = await axios.put(`http://localhost:5000/products/${productId}`, { price });
        console.log(data);
    }

    return (
        <div>
            <h2>Update Product Price</h2>
            {/* Update setup here */}
        </div>
    );
}

export default UpdateProduct;
