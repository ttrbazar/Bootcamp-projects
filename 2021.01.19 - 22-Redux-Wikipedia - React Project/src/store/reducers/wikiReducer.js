import  {combineReducers}  from 'redux';
import {SEND, CLEAR} from "../actions/fetchWiki";

const initialState = []
export const wikiReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND:
            return action.payload;
        case CLEAR:
            return initialState;
        default:
            return state;
    }
}

export const reducers = combineReducers({
    wikies: wikiReducer
});