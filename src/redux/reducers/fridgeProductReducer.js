import {
  FETCH_FRIDGE_PRODUCTS_SUCCESS,
  ADD_FRIDGE_PRODUCT_SUCCESS,
  FETCH_FRIDGE_PRODUCTS_REQUEST,
  FETCH_FRIDGE_PRODUCTS_FAILURE,
  ADD_FRIDGE_PRODUCT_REQUEST,
  ADD_FRIDGE_PRODUCT_FALSE,
  DELETE_FRIDGE_PRODUCT_SUCCESS,
  DELETE_FRIDGE_PRODUCT_REQUEST,
  DELETE_FRIDGE_PRODUCT_FAILURE,
} from "../action/fridgeProductActions";

const initialState = {
  fridgeProducts: [],
  loading: false,
  error: null,
};

const fridgeProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIDGE_PRODUCTS_REQUEST:
    case ADD_FRIDGE_PRODUCT_REQUEST:
      return { ...state, loading: true };

    case FETCH_FRIDGE_PRODUCTS_SUCCESS:
      return {
        ...state,
        fridgeProducts: action.payload,
        loading: false,
      };

    case ADD_FRIDGE_PRODUCT_SUCCESS:
      return {
        ...state,
        fridgeProducts: [...state.fridgeProducts, action.payload],
        loading: false,
      };

    case FETCH_FRIDGE_PRODUCTS_FAILURE:
    case ADD_FRIDGE_PRODUCT_FALSE:
      return { ...state, loading: false, error: action.payload };

    case DELETE_FRIDGE_PRODUCT_SUCCESS:
      return {
        ...state,
        fridgeProducts: state.fridgeProducts.filter((prod) => prod.id !== action.payload),
        loading: false,
      };

    case DELETE_FRIDGE_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case DELETE_FRIDGE_PRODUCT_REQUEST:
      return { ...state, loading: true };
      
    default:
      return state;
  }
};

export default fridgeProductReducer;
