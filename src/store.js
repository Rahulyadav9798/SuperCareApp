import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { userReducer } from "./redux/reducer/userReducer";

const reducer = combineReducers({
    user: userReducer,
})

let initialState = {};

const middleware = [thunk]
const store = createStore(
    reducer,
    initialState,
   applyMiddleware(...middleware)
);

export default store