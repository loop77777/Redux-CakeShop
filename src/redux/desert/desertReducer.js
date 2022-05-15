import { BUY_DESERT } from "./desertTypes";

const initialState = {
  numOfDesert: 25,
};

const desertReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_DESERT:
      return {
        ...state,
        numOfDesert: state.numOfDesert - action.payload,
      };
    default:
      return state;
  }
};

export default desertReducer;
