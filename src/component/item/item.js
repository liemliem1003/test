import React from 'react'
import './item.css'

function Item(props){
  return(
    <div className="item">
      <img src={props.img}/>
      <div>{props.name}</div>
      <div>{props.details}</div>
      <button onClick={props.onClick}>ADD TO CART</button>
    </div>
  )
}
export default Item
