import React, { useState } from 'react';
import axios from 'axios';

function DeleteProduct() {
    const [productId, setProductId] = useState('');

    const deleteProduct = async () => {
        const { data } = await axios.delete(`http://localhost:5000/products/${productId}`);
        console.log(data);
    }

    return (
        <div>
            <h2>Delete Product</h2>
            {/* Delete interface here */}
        </div>
    );
}

export default DeleteProduct;
