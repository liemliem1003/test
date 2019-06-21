import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import actions from '../../actions.js'

function NavBar(props){
  console.log(props);
  return(
    <div>
      <nav>
        <ul>
          <li><Link onClick={()=>props.changePage("watches")} to="/watches">Watches</Link></li>
          <li><Link onClick={()=>props.changePage("clothes")} to="/clothes">Clothes</Link></li>
          <li><Link onClick={()=>props.changePage("shoes")} to="/shoes">Shoes</Link></li>
          <li className="home"><Link onClick={()=>props.changePage("home")} to="/">Home</Link></li>
          <li><Link onClick={()=>props.changePage("about")} to="/about">About</Link></li>
          <li><Link onClick={()=>props.changePage("contact")} to="/contact">Contact</Link></li>
          <li>{props.user===null ? <Link onClick={()=>props.changePage("login")} to="/login">Login</Link> : <Link to="/shoppingcart">Shopping Cart</Link>} </li>
        </ul>
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar)
