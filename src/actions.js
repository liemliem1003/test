
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const CHANGE_CART_QUANTITY = 'CHANGE_CART_QUANTITY'
export const NAVIGATE = 'NAVIGATE'
export const CHECKOUT = 'CHECKOUT'
export const SETPRODUCTS = 'SETPRODUCTS'
export const GETPRODUCTS = 'GETPRODUCTS'
export const SORTBYNAME = 'SORTBYNAME'
export const SORTBYPRICE = 'SORTBYPRICE'

const setProducts = products => {
  return {
    type: SETPRODUCTS,
    payload: products,
  }
}

const sortByPrice = products =>{
  return {
    type: SORTBYNAME,
    payload: products,
  }
}


const sortByName = products =>{
  return {
    type: SORTBYNAME,
    payload: products,
  }
}

const addProduct = product => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  }
}

const navigate = toPage => {
  return {
    type: NAVIGATE,
    payload: toPage,
  }
}

const checkout = () => {
  return {type: CHECKOUT}
}

const removeCartItem = id => {
  return {
    type: REMOVE_CART_ITEM,
    payload: id,
  }
}

const changeQuantity = (product, condition) => {
  return {
    type: CHANGE_CART_QUANTITY,
    payload: product
  }
}

export default {
  setProducts,
  addProduct,
  navigate,
  checkout,
  removeCartItem,
  changeQuantity,
  sortByName,
  sortByPrice
}
