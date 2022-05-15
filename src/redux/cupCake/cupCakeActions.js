import { BUY_CUPCAKE } from "./cupCakeTypes";
export const buyCupcake = (number = 1) => {
  return {
    type: BUY_CUPCAKE,
    payload: number,
  };
};
