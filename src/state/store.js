import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";


//first argument is the initial state and second argument is the default state
export const store = createStore(reducers, {}, applyMiddleware(thunk));
