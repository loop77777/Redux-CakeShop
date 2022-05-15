import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import cupCakeReducer from "./cupCake/cupCakeReducer";
import desertReducer from "./desert/desertReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  cupCake: cupCakeReducer,
  desert: desertReducer,
});

export default rootReducer;
