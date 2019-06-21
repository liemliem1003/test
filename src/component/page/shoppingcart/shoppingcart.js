import React from 'react'
import './shoppingcart.css'
import {connect} from 'react-redux'
import actions from '../../../actions'
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
      <div>
        <button onClick={()=>console.log(props)}>-</button>
        <div>{props.quantity}</div>
        <button onClick={() => props.changeQuantity({product:props,condition:"plus"})}>+</button>
      </div>
    </div>
  )
}

function ShoppingCart(props){
  var totalPrice = 0
  props.shoppingCart.forEach(function(element){
    totalPrice+=element.price*element.quantity
  })
  const list=props.shoppingCart.map((product, i) => (
    <div className="shoppingCartItem" key={i}>
      <img src={product.img}/>
      <div>{props.name}</div>
      <div>{numberWithCommas(product.price)}</div>
      <div style={{display:"flex", margin:"auto"}}>
        <button onClick={() => props.changeQuantity({product:product,condition:"minus"})}>-</button>
        <div>{product.quantity}</div>
        <button onClick={() => props.changeQuantity({product:product,condition:"plus"})}>+</button>
      </div>
    </div>
    )
  )
  return props.shoppingCart.length==0
  ? (<div>There is no item ^^</div>)
  : (<div className="container"><div className="list">{list}</div><div>Total Price: {numberWithCommas(totalPrice)}</div><button onClick={()=>props.checkout(props.shoppingCart)}>Checkout</button></div>)
}
const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    checkout: listProduct => {
      dispatch(actions.checkout(listProduct))
    },
    changeQuantity: (product) => {
      dispatch(actions.changeQuantity(product))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart)
