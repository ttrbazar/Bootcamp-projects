import { combineReducers } from "redux";
import articlelistReducer from "./articlelistReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers(
    { articlesState: articlelistReducer, searchState: searchReducer }
);

export default rootReducer;