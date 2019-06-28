import React from 'react'
import './shoes.css'
import Item from '../../item/item.js'
import {connect} from 'react-redux'
import actions from '../../../actions'
import Product from '../product/product.js'

function Shoes(props){
  const propsOfItem = props.products.Shoes
  const x = 8
  let page = 0
  function DivideProducts(){
    const list=propsOfItem.map((product, i) => (
        <div key={i}>
          <Item img={product.img} name={product.name} price={product.price} details={product.details} onClick={()=>props.addProduct(product)}/>
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
      <div className="group-btn">
        <button onClick={()=>props.sortByName({condition:true,kind:"Shoes"})}>sort by name<br/>from a to z</button>
        <button onClick={()=>props.sortByName({condition:false,kind:"Shoes"})}>sort by name<br/>from z to a</button>
        <button onClick={()=>props.sortByPrice({condition:true,kind:"Shoes"})}>sort by price<br/>(descending)</button>
        <button onClick={()=>props.sortByPrice({condition:false,kind:"Shoes"})}>sort by price<br/>(ascending)</button>
      </div>
      <div className="list">{DivideProducts(8)[String(props.page)]}</div>
      <div className="group-page-btn">{CreateButtons()}</div>
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
    changeProductsInPage: page =>{
      dispatch(actions.changeProductsInPage(page))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shoes)
