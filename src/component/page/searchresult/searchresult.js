import React from 'react'
import './searchresult.css'
import {connect} from 'react-redux'
import actions from '../../../actions'
import Item from '../../item/item.js'

function SearchResult(props){
  const propsOfItem = props.foundProduct
  const x = 8
  function DivideProducts(){
    const list=propsOfItem.map((product, i) => (
        <div key={i}>
          <Item img={product.img} name={product.name} price={product.price} onClick={()=>props.addProduct(product)} details={product.details}/>
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
      <div className="group-page-btn">{CreateButtons()}</div>
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
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResult)
