import React from 'react'
import './home.css'
import Item from '../../item/item.js'
import {connect} from 'react-redux'
import actions from '../../../actions'

function Home(props){
  console.log('path',props.match)
  function list(listProduct, start, quantity){
    let x =[];
    for (var i = start; i < quantity+start; i++) {
      x[String(i)] = listProduct[i];
    }
    x = x.map((product, i) => (
        <div key={i}>
          <Item img={product.img} name={product.name} price={product.price} onClick={()=>props.addProduct(product)}/>
        </div>
      )
    )
    return x
  }

  return(
    <div className="page">
      <div>WATCHES</div>
      <div className="home-container">
        <div className="home-frame watches">
          {list(props.products.Watches, 3,4)}
        </div>
      </div>
      <div className="page">CLOTHES</div>
        <div className="home-container">
          <div className="home-frame clothes">
            {list(props.products.Clothes, 3,4)}
          </div>
        </div>
      <div className="page">SHOES</div>
      <div className="home-container">
        <div className="home-frame shoes">
          {list(props.products.Shoes, 3,4)}
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return state
}
const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => {
      dispatch(actions.addProduct(product))
    },
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
