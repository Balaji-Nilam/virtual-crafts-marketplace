import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import './App.css';

function App() {
    const [category, setCategory] = useState(localStorage.getItem('preferredCategory') || 'electronics');

    useEffect(() => {
        localStorage.setItem('preferredCategory', category);
    }, [category]);

    return (
        <Router>
            <NavBar setCategory={setCategory} />
            <Switch>
                <Route path="/category/:category">
                    <ProductList setCategory={setCategory} />
                </Route>
                <Redirect to={`/category/${category}`} />
            </Switch>
        </Router>
    );
}

export default App;
