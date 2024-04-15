import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CreateProduct from './CreateProduct';
import ProductList from './ProductList';
import UpdateProduct from './UpdateProduct';
import DeleteProduct from './DeleteProduct';

function App() {
    return (
        <Router>
            <div>
                <h1>Product Manager</h1>
                <nav>
                    <Link to="/create">Create Product</Link> | 
                    <Link to="/read">View Products</Link> | 
                    <Link to="/update">Update Product</Link> | 
                    <Link to="/delete">Delete Product</Link>
                </nav>
                <Switch>
                    <Route path="/create" component={CreateProduct} />
                    <Route path="/read" component={ProductList} />
                    <Route path="/update" component={UpdateProduct} />
                    <Route path="/delete" component={DeleteProduct} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
