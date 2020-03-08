import {createStore, combineReducers} from "redux";
import options, {Options}from "./optionsReducer";

export interface Store {
  options: Options;
}

const reducers = combineReducers({ options });
export default createStore(reducers);