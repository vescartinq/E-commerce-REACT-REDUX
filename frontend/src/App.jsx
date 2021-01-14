import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartScreen from './views/CartScreen';
import HomeScreen from './views/HomeScreen'
import ProductScreen from './views/ProductScreen'
import SigninScreen from './views/SigninScreen'



function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <BrowserRouter>
      <div className="grid-container">
          <header className="row">
              <div>
                  <Link className="brand" to="/">TriSoul</Link>
              </div>
              <div>
                  <Link to="/cart">Cart
                  {cartItems.length > 0 && (
                    <span className="badge">{cartItems.length}</span>
                  )}
                  </Link>
                  <Link to="/signin">Sign In</Link>
              </div>
          </header>
          <main>
            <Route path="/cart/:id?" component={CartScreen}/>
            <Route path="/product/:id" component={ProductScreen}/>
            <Route path="/signin" component={SigninScreen}></Route>
            <Route path="/" component={HomeScreen} exact/>
         
        </main>
          <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
