import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './views/HomeScreen'
import ProductScreen from './views/ProductScreen'



function App() {

  return (
    <BrowserRouter>
      <div className="grid-container">
          <header className="row">
              <div>
                  <a className="brand" href="index.html">TriSoul</a>
              </div>
              <div>
                  <a href="cart.html">Cart</a>
                  <a href="signin.html">Sign In</a>
              </div>
          </header>
          <main>
            <Route path="/product/:id" component={ProductScreen}/>
            <Route path="/" component={HomeScreen} exact/>
         
        </main>
          <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
