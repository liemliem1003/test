// import React from 'react'
// import './product.css'
// import Item from '../../item/item.js'
// import {connect} from 'react-redux'
// import actions from '../../../actions'
//
// function Product(props, kind){
//
//   // const propsOfItem = props.products.[kind]
//   const list=propsOfItem.map((product, i) => (
//       <div key={i}>
//         <Item img={product.img} name={product.name} price={product.price} onClick={()=>props.addProduct(product)}/>
//       </div>
//     )
//   )
//   return(
//     <div>
//       <div>
//         <button onClick={()=>props.sortByName({condition:true,kind:"Watches"})}>sortByName</button>
//         <button onClick={()=>props.sortByName({condition:false,kind:"Watches"})}>sortByName</button>
//         <button>sort</button>
//         <button>sort</button>
//       </div>
//       <div className="list">{list}</div>
//     </div>
//   )
// }
// const mapStateToProps = state => {
//   return state
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     addProduct: product => {
//       dispatch(actions.addProduct(product))
//     },
//     sortByName: condition =>{
//       dispatch(actions.sortByName(condition))
//     },
//   }
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Product)
