import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "../reducers/user";
import catReducer from "../reducers/cats";

const store = createStore(combineReducers({user: userReducer, cats:catReducer}),applyMiddleware(thunk));

export default store;
