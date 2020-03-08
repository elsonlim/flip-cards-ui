import {Action, TOGGLE_DEFAULT_SIDE} from "../actionCreators/interfaces";

export interface Options {
  defaultSide: boolean;
}

const defaultState = { defaultSide: false };

const optionsReducer = (state=defaultState, action: Action): Options => {
  switch(action.type) {
    case TOGGLE_DEFAULT_SIDE:
      return { ...state, defaultSide: action.payload };
    default:
      return state;
  }
}

export default optionsReducer;