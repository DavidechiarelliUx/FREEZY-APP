import { DECREMENT, INCREMENT } from "../action/index.js";

const initialState = {
  count: 0,
};


const mainReducers = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
          ...state,
          count: state.count + action.payload,
        };
    case DECREMENT:
      return {
          ...state,
          count: state.count - action.payload,
        };
    default:
      return state;
  }
};

export default mainReducers;
