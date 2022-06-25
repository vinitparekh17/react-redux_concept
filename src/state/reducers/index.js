// combining reducer as many as we made in reducers folder

import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

const reducers = combineReducers({
    // it is gonna be an object with key and value
    account: accountReducer
})

export default reducers;