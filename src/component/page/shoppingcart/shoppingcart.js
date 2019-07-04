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
  props.changePage("shoppingcart")
  var totalPrice = 0
  props.shoppingCart.forEach(function(element){
    totalPrice+=element.price*element.quantity
  })
  console.log(props);
  const list=props.shoppingCart.map((product, i) => (
    <div className="shoppingCartItem" key={i}>
      <img src={product.img}/>
      <div>{product.name}</div>
      <div>{numberWithCommas(product.price)}</div>
      <div className="group-item-btn">
        <button onClick={() => props.changeQuantity({product:product,condition:"minus"})}>-</button>
        <div style={{width:"30px"}}>{product.quantity}</div>
        <button onClick={() => props.changeQuantity({product:product,condition:"plus"})}>+</button>
      </div>
      <div style={{color:"white", background:"red", margin:"10px 0 0 0",}}>HOT</div>
    </div>
    )
  )
  return props.shoppingCart.length==0
  ? (<div className="page">There is no item ^^</div>)
  : (<div className="container page"><div className="list">{list}</div><div>Total Price: {numberWithCommas(totalPrice)}</div><button onClick={()=>props.checkout(props.shoppingCart)}>Checkout</button></div>)
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
    changePage: page => {
      dispatch(actions.changePage(page))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart)
