import React from 'react'
import './item.css'

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function Item(props){
  return(
    <div className="item">
      <img src={props.img}/>
      <div>{props.name}</div>
      <div>{numberWithCommas(props.price)}</div>
      <button className="add-to-cart-btn" onClick={props.onClick}>ADD TO CART</button>
    </div>
  )
}
export default Item
