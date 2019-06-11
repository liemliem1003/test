import React from 'react';
import './App.css';
import NavBar from './component/navbar/navbar.js'
import Home from './component/page/home/home.js'
import Clothes from './component/page/clothes/clothes.js'
import Shoes from './component/page/shoes/shoes.js'
import Watches from './component/page/watches/watches.js'
import About from './component/page/about/about.js'
import ShoppingCart from './component/page/shoppingcart/shoppingcart.js'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
              <Route path="/clothes" component={Clothes} />
            <Route path="/shoes" component={Shoes} />
            <Route path="/watches" component={Watches} />
            <Route path="/shoppingcart" component={ShoppingCart} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
