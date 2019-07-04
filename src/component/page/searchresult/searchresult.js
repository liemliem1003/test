import React from 'react'
import './searchresult.css'
import {connect} from 'react-redux'
import actions from '../../../actions'
// import Item from '../../item/item.js'

// function Item(product){
//   return(
//     <div>
//       <img src={product.img}/>
//       <div>{product.name}</div>
//       <div>{numberWithCommas(product.price)}</div>
//       <div className="group-item-btn">
//         <button onClick={() => props.changeQuantity({product:product,condition:"minus"})}>-</button>
//         <div style={{width:"30px"}}>{product.quantity}</div>
//         <button onClick={() => props.changeQuantity({product:product,condition:"plus"})}>+</button>
//       </div>
//       <div style={{color:"white", background:"red", margin:"10px 0 0 0",}}>HOT</div>
//     </div>
//   )
// }
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function SearchResult(props){
  // <Item img={product.img} name={product.name} price={product.price} onClick={()=>props.addProduct(product)} details={product.details}/>
  props.changePage("searchresult")
  const propsOfItem = props.foundProduct
  const x = 8
  function DivideProducts(){
    const list=propsOfItem.map((product, i) => (
        <div className="shoppingCartItem" key={i}>
          <img src={product.img}/>
          <div>{product.name}</div>
          <div>{numberWithCommas(product.price)}</div>
          <button  onClick={()=>props.addProduct(product)}>ADD TO CART</button>
          <div style={{color:"white", background:"red", margin:"10px 0 0 0",}}>HOT</div>
        </div>
      )
    )
    const y = propsOfItem.length/x
    var b={}
    for (var i = 0; i < y; i++) {
      var c=[]
      for (var j = i*x; j < x*(i+1); j++) {
        if (list[j]!=null) {
          c.push(list[j])
        }
      }
      b[String(i)]=c
    }
    return b
  }
  function CreateButtons(){
    const y = propsOfItem.length/x
    var a = []
    for (var i = 0; i < y; i++) {
      const b = i
      a[i] = <button key ={i} onClick = {() =>props.changeProductsInPage(b)}>{i+1}</button>
    }
    return a
  }
  return(
    <div className="page">
      {propsOfItem.length == 0 ? <div>Nothing</div> : <div className="list">{DivideProducts(8)[String(props.page)]}</div>}
      <div className="group-page-btn group-btn-in-searchresult">{CreateButtons()}</div>
    </div>
  )
}

const mapStateToProps = state => {
  return state
}
const mapDispatchToProps = dispatch => {
  return {
    changeProductsInPage: page =>{
      dispatch(actions.changeProductsInPage(page))
    },
    changePage: page => {
      dispatch(actions.changePage(page))
    },
    addProduct: product => {
      dispatch(actions.addProduct(product))
    },
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResult)
