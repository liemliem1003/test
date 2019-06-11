import React from 'react'
import './home.css'
import Item from '../../item/item.js'

function Home(){
  return(
    <div>
    <div>WATCHES</div>
      <div className="container">
        <div className="frame watches">
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </div>
      </div>
      <div>CLOTHES</div>
      <div className="container">
        <div className="frame clothes">
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </div>
      </div>
      <div>SHOES</div>
      <div className="container">
        <div className="frame shoes">
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </div>
      </div>
    </div>
  )
}
export default Home
