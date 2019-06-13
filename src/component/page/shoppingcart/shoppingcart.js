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


function ShoppingCart(props){
  var totalPrice = 0
  props.shoppingCart.forEach(function(element){
    totalPrice+=element.price*element.quantity
  })
  const list=props.shoppingCart.map((product, i) => (
      <div key={i} className="checkout-product">
        <div>Name: {product.name}</div>
        <div>Price: {numberWithCommas(product.price)}</div>
        <div>Quantity: </div>
        <button onClick={() => props.changeQuantity({product:product,condition:"minus"})}>-</button>
        <div>{product.quantity}</div>
        <button onClick={() => props.changeQuantity({product:product,condition:"plus"})}>+</button>
      </div>
    )
  )
  return props.shoppingCart.length==0
  ? (<div>There is no item ^^</div>)
  : (<div className="container"><div>{list}</div><div>Total Price: {numberWithCommas(totalPrice)}</div><button onClick={()=>props.checkout(props.shoppingCart)}>Checkout</button></div>)
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
