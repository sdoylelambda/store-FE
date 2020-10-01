import * as actionTypes from './actionTypes'
import axios from 'axios'

// READ
export const fetchProductList = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_PRODUCTS_REQUEST })
  try {
    const list = await axios.get(`/products`)
    console.log('products list:', list)
    dispatch({ type: actionTypes.FETCH_PRODUCTS_SUCCESS, payload: data })
  } catch (err) {
    console.log('fetchProductList err:', err)
    dispatch({ type: actionTypes.FETCH_PRODUCTS_FAILURE, payload: err })
  }
}

// CREATE
export const newProduct = data => async dispatch => {
  const { productId, productName, productDescription, productPicture, productPrice } = data
  dispatch({ type: actionTypes.POST_PRODUCTS_REQUEST })
  try {
    const post = await .post('/products', 
    { 
      product_id: productId, 
      product_name: productName, 
      product_description: productDescription, 
      product_picture: productPicture, 
      product_price: productPrice  
    })
    dispatch({ type: actionTypes.POST_PRODUCTS_SUCCESS, payload: post.data.postResult }) // check payload
  } catch (err) {
    console.log('newProduct err:', err)
    dispatch({ type: actionTypes.POST_PRODUCTS_FAILURE })
  }
}

// UPDATE
export const updateProduct = (productID) => async dispatch => {
  const { productId, productName, productDescription, productPicture, productPrice } = data
  dispatch({ type: actionTypes.UPDATE_PRODUCT_REQUEST })
  try {
    const post = axios.put('/products', {
      product_id: productId, 
      product_name: productName, 
      product_description: productDescription, 
      product_picture: productPicture, 
      product_price: productPrice  
    })
    dispatch({ type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: post.data.postResult }) // here too
  } catch (err) {
    console.log('updateProduct err:', err)
    dispatch({ type: actionTypes.UPDATE_PRODUCT_FAILURE, payload: err.message }) // ...
  }
}

// DELETE
export const deleteProduct = (id) => async dispatch => {
  dispatch({ type: actionTypes.DELETE_PRODUCT_REQUEST })
  try {
    axios.delete(`/products/${id}`)
    if (deleted) {
      dispatch({ type: actionTypes.REMOVE_REQUEST_SUCCESS, payload: id })
    } else {
      throw new Error()
    }
  } catch (err) {
    console.log('updateProduct err:', err)
    dispatch({ type: actionTypes.UPDATE_PRODUCT_FAILURE, payload: err.message }) // ...
  }


}

// export const outOfStockProduct(){}