import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartScreen from './views/CartScreen';
import HomeScreen from './views/HomeScreen'
import ProductScreen from './views/ProductScreen'



function App() {

  return (
    <BrowserRouter>
      <div className="grid-container">
          <header className="row">
              <div>
                  <Link className="brand" to="/">TriSoul</Link>
              </div>
              <div>
                  <Link to="/cart">Cart</Link>
                  <a href="signin.html">Sign In</a>
              </div>
          </header>
          <main>
            <Route path="/cart/:id?" component={CartScreen}/>
            <Route path="/product/:id" component={ProductScreen}/>
            <Route path="/" component={HomeScreen} exact/>
         
        </main>
          <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
