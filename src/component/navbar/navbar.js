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
          <li className="home"><Link onClick={()=>props.changePage("home")} to="/">Home</Link></li>
          <li><Link onClick={()=>ChangePage("watches")} to="/watches">Watches</Link></li>
          <li><Link onClick={()=>ChangePage("clothes")} to="/clothes">Clothes</Link></li>
          <li><Link onClick={()=>ChangePage("shoes")} to="/shoes">Shoes</Link></li>
          <li><Link onClick={()=>props.changePage("about")} to="/about">About</Link></li>
          <li><Link onClick={()=>props.changePage("contact")} to="/contact">Contact</Link></li>
          <li>{props.user===null ? <Link onClick={()=>props.changePage("login")} to="/login">Login</Link> : <Link to="/shoppingcart">Shopping Cart</Link>} </li>
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
    changePage: page => {
      dispatch(actions.changePage(page))
    },
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
