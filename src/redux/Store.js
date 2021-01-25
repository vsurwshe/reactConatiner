import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import MainPageState from './reducer/MainPageReducer'

// in this function we combine the differnt reducer for single store
const reducer = combineReducers({
    MainPageState
});

// this functions apply logger funtionality during development mode 
const enhancer= compose(applyMiddleware(thunk, 
    logger /* This will logger for redux */
));

// this function will be createing store
const store = createStore(
    reducer, 
    enhancer
);

export default store;