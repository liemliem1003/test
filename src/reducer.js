import {
  LOGIN,
  CHANGEPAGE,
  ADD_PRODUCT_TO_CART,
  REMOVE_CART_ITEM,
  CHANGE_CART_QUANTITY,
  CHECKOUT,
  NAVIGATE,
  SETPRODUCTS,
  SORTBYNAME,
  SORTBYPRICE,
} from './actions'
import products from './component/productsList.js'

const initialState = {
  user: {name:"liem", pass:"as"},
  activePage: 'about',
  productDetail: null,
  shoppingCart: [],
  successShoopingCart: [],
  products:products,
  initialProducts:products,
}



const sortByName = (state, x) => {
  const product = [
    ...state.products[x.kind]
  ]
  product.forEach(function(element){
    element.point=0
    })
    for (var i = 0; i < product.length; i++) {
      for (var j = 0; j < product.length; j++) {
        product[i].name.toUpperCase() > product[j].name.toUpperCase()
        ? product[i].point++
        : product[i].point+=0
      }
    }
    x.condition
    ? product.sort(function(a,b){
      return a.point - b.point
      })
    : product.sort(function(a,b){
      return b.point - a.point
      })
    product.forEach(function(a){
      delete a.point
    })
  const products = {...state.products}
  products[x.kind] = {...product}
  const newState = {...state, products:products}
  newState.products[x.kind] = product
  return newState
}
const sortByPrice = (state, x) =>{
  const product = [
    ...state.products[x.kind]
  ]
    x.condition
    ? product.sort(function(a,b){
      return a.price - b.price
      })
    : product.sort(function(a,b){
      return b.price - a.price
      })
      const products = {...state.products}
      products[x.kind] = {...product}
      const newState = {...state, products:products}
      newState.products[x.kind] = product
      return newState
}
const addToCart = (state,product) => {
  let {products, shoppingCart} = state
  if(shoppingCart.length==0){
      product.quantity=1
      shoppingCart=[...shoppingCart,product]
    }else {
      for (var i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].id===product.id) {
          shoppingCart[i].quantity++
          break
        }
        else{
          if (i===shoppingCart.length-1) {
            product.quantity=1
            shoppingCart=[...shoppingCart,product]
            break
          }
        }
      }
    }
    state.shoppingCart=[...shoppingCart]
    return {...state}
}

const checkout = state => {
    const {shoppingCart, successShoopingCart} = state
    const newShoppingCart = []
    const newSuccessShoopingCart =
      successShoopingCart.length > 0
        ? [...successShoopingCart, shoppingCart]
        : [shoppingCart]
    const newAppState = {
      ...state,
      shoppingCart: newShoppingCart,
      successShoopingCart: newSuccessShoopingCart,
    }
    alert("Checkout successfully")
    return newAppState
}
const login = (state, user) => {
    return {...state, user}
}
const changePage = (state, page) => {
  const newState= {...state, activePage:page}


  return {...newState}
}

const changeQuantity = (state, product) => {
  console.log(product);
  let shoppingCart=[...state.shoppingCart]
  shoppingCart.forEach(function(element){
    if(element.id==product.product.id) {
      product.condition == "plus" ? element.quantity++ : element.quantity--
    }
  })
  for (var i = 0; i < shoppingCart.length; i++) {
    shoppingCart[i].quantity === 0 ? shoppingCart.splice(i,1) : shoppingCart = shoppingCart
  }
  const newState = {...state, shoppingCart:shoppingCart}
  return newState
}

export default function appState(state = initialState, action) {
  switch (action.type) {
    case SETPRODUCTS:
      return {...state, products: action.payload}
    case ADD_PRODUCT_TO_CART:
      return addToCart(state, action.payload)
    case CHECKOUT:
      return checkout(state)
    case CHANGEPAGE:
      return changePage(state, action.payload)
    case CHANGE_CART_QUANTITY:
      return changeQuantity(state, action.payload)
    case SORTBYNAME:
      return sortByName(state, action.payload)
    case LOGIN:
      return login(state, action.payload)
    case SORTBYPRICE:
      return sortByPrice(state, action.payload)
    case NAVIGATE:
      return {...state, activePage: action.payload}
    default:
      return state
  }
}
