import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import actions from '../../actions.js'

function NavBar(props){

  function ChangePage(page){
    props.changePage(page)
    props.changeProductsInPage(0)
  }
  return(
    <div>
      <nav>
        <ul>
          <li className="home"><Link to="/">Home</Link></li>
          <li><Link to="/watches">Watches</Link></li>
          <li><Link to="/clothes">Clothes</Link></li>
          <li><Link to="/shoes">Shoes</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>{props.user===null ? <Link to="/login">Login</Link> : <Link to="/shoppingcart">Shopping Cart</Link>} </li>
        </ul>
        <input type="text" style={{height:"22px"}} onChange={(x)=>props.findProductsByName(x.target.value)}/>
        <button style={{height:"27px"}}><Link to="/searchresult">SEARCH</Link></button>
      </nav>
    </div>
  )
}
const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {

    changeProductsInPage: page =>{
      dispatch(actions.changeProductsInPage(page))
    },
    findProductsByName: text => {
      dispatch(actions.findProductsByName(text))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar)
