import React from 'react'
import './shoes.css'
import Item from '../../item/item.js'
import {connect} from 'react-redux'
import actions from '../../../actions'
import Product from '../product/product.js'

function Shoes(props){
  const propsOfItem = props.products.Shoes
  const list=propsOfItem.map((product, i) => (
      <div key={i}>
        <Item img={product.img} name={product.name} price={product.price} onClick={()=>props.addProduct(product)}/>
      </div>
    )
  )
  return(
    <div>
      <div className="group-btn">
        <button onClick={()=>props.sortByName({condition:true,kind:"Clothes"})}>sort by name<br/>from a to z</button>
        <button onClick={()=>props.sortByName({condition:false,kind:"Clothes"})}>sort by name<br/>from z to a</button>
        <button onClick={()=>props.sortByPrice({condition:true,kind:"Clothes"})}>sort by price<br/>(descending)</button>
        <button onClick={()=>props.sortByPrice({condition:false,kind:"Clothes"})}>sort by price<br/>(ascending)</button>
      </div>
      <div className="list">{list}</div>
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
    sortByName: condition =>{
      dispatch(actions.sortByName(condition))
    },
    sortByPrice: condition =>{
      dispatch(actions.sortByPrice(condition))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shoes)
