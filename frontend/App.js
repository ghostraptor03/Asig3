import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CreateProduct from './CreateProduct';
import ProductList from './ProductList';
import UpdateProduct from './UpdateProduct';
import DeleteProduct from './DeleteProduct';
import StudentInfo from './StudentInfo';

function App() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><Link to="/create" className="nav-link">Create</Link></li>
                        <li className="nav-item"><Link to="/read" className="nav-link">Read</Link></li>
                        <li className="nav-item"><Link to="/update" className="nav-link">Update</Link></li>
                        <li className="nav-item"><Link to="/delete" className="nav-link">Delete</Link></li>
                        <li className="nav-item"><Link to="/info" className="nav-link">Info</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/create" component={CreateProduct} />
                    <Route path="/read" component={ProductList} />
                    <Route path="/update" component={UpdateProduct} />
                    <Route path="/delete" component={DeleteProduct} />
                    <Route path="/info" component={StudentInfo} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
