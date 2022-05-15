export { buyCake } from "./cake/cakeActions";
export { buyIceCream } from "./iceCream/iceCreamActions";
export { buyCupcake } from "./cupCake/cupCakeActions";
export { buyDesert } from "./desert/desertActions";

//action creators, reducers, provide the store and connect the components.
//components can access state and dispatch actions

//react redux + hooks
//react redux v7.1 hooks has been added. it is an alternative to connect to higher order component. it provide to subscribe to the redux store and dispatch actions  without having to wrap our component in connect
// in short (Subscribe to store and dispatch actions without connect() )
