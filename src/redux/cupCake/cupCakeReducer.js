import { BUY_CUPCAKE } from "./cupCakeTypes";

const initialState = {
  numOfCupcakes: 25,
};

const cupCakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CUPCAKE:
      return {
        ...state,
        numOfCupcakes: state.numOfCupcakes - action.payload,
      };
    default:
      return state;
  }
};

export default cupCakeReducer;
