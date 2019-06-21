import React from 'react';
import './App.css';
import NavBar from './component/navbar/navbar.js'
import Footer from './component/footer/footer.js'
import Home from './component/page/home/home.js'
import Notfound from './component/page/404notfound/404notfound.js'
import Clothes from './component/page/clothes/clothes.js'
import Clone from './component/page/clone/clothes.js'
import Shoes from './component/page/shoes/shoes.js'
import Watches from './component/page/watches/watches.js'
import About from './component/page/about/about.js'
import Login from './component/page/login/login.js'
import Register from './component/page/register/register.js'
import ShoppingCart from './component/page/shoppingcart/shoppingcart.js'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import actions from './actions'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/" component={Clone} />
              <Route exact path="/login" component={Login} />

              <Route path="/clothes" component={Clothes} />
              <Route path="/shoes" component={Shoes} />
              <Route path="/watches" component={Watches} />
              <Route path="/notfound" component={Notfound} />
              <Route path="/shoppingcart" component={ShoppingCart} />
              <Redirect to="/notfound" />
            </Switch>
          </div>
        </Router>
        <Footer/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => {
      dispatch(actions.getProducts())
    },
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
