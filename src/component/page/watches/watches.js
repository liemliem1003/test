import React from 'react'
import './watches.css'
import Item from '../../item/item.js'
import {connect} from 'react-redux'
import actions from '../../../actions'

function Watches(props){
  // console.log(props);
  const propsOfItem = props.watches
  const list=propsOfItem.map((product, i) => (

      <div key={i}>
        <Item img={product.img} name={product.name} details={product.details} onClick={props.addProduct}/>
      </div>
    )
  )
  return(
    <div>
      <div>
        <button>sort</button>
        <button>sort</button>
        <button>sort</button>
        <button>sort</button>
      </div>
      {list}
    </div>
  )
}
const mapStateToProps = state => {
  // console.log(state)
  // console.log(state);
  return {

    watches: state.products.Watches,
  }
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
)(Watches)
