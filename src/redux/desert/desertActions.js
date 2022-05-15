import { BUY_DESERT } from "./desertTypes";

export const buyDesert = (number) => {
  return {
    type: BUY_DESERT,
    payload: number,
  };
};
