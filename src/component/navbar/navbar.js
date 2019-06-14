import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

function NavBar(){
  return(
    <div>
      <nav>
        <ul>
          <li><Link to="/watches">Watches</Link></li>
          <li><Link to="/clothes">Clothes</Link></li>
          <li><Link to="/shoes">Shoes</Link></li>
          <li className="home"><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/shoppingcart">Shopping Cart</Link></li>
        </ul>
        <a>a</a>
      </nav>

    </div>
  )
}
export default NavBar
