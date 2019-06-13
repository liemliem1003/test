import React from 'react'
import './home.css'
import Item from '../../item/item.js'

function Home(){
  return(
    <div>
    <div>WATCHES</div>
      <div className="container">
        <div className="frame watches">
        </div>
      </div>
      <div>CLOTHES</div>
      <div className="container">
        <div className="frame clothes">
        </div>
      </div>
      <div>SHOES</div>
      <div className="container">
        <div className="frame shoes">
        </div>
      </div>
    </div>
  )
}
export default Home
