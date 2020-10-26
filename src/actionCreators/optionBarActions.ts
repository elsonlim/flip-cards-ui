import {Action, TOGGLE_DEFAULT_SIDE} from "./interfaces";


export const setDefaultSide = (shouldFaceUp: boolean): Action  => {
  console.log("action setDefaultSide", shouldFaceUp);
  return {
    type: TOGGLE_DEFAULT_SIDE,
    payload: shouldFaceUp,
  };
}