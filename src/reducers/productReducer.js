import * as types from '../actions/actionTypes'

const initialState = {
  productList: [],
  err: '',
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: action.payload,
      }
    case types.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        err: action.payload,
      }
    default:
      return state
  }
}
