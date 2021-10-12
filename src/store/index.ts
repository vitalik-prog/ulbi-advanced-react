import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers"

const rootReducer = combineReducers(allReducers)

export const store = createStore(rootReducer, applyMiddleware(thunk))
