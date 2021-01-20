import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import { logger } from 'redux-logger'


export function configureStore(initialState = {}) {
    const store = createStore(reducer, initialState, applyMiddleware(thunk, logger));
    return store;
}

export const store = configureStore();