import {
    INVALID_SUBREDDIT,
    RECEIVE_POSTS,
    CLEAR_LIST,
    SET_FETCH_PENDING
} from '../actions'

const initialState = {
    posts: [],
    isFetching: false,
    lastUpdated: null
};

const rootReducer = (state = initialState, action) => {
    // console.log("In reducer: ", action.type);
    // console.log("In reducer: ", action.payload);
    switch (action.type) {
        case RECEIVE_POSTS:
            return { ...state, posts: action.payload, lastUpdated: (Date.now()), isFetching: false };
        case INVALID_SUBREDDIT:
            return initialState;
        case CLEAR_LIST:
            return initialState;
        case SET_FETCH_PENDING:
            return {...state, isFetching: true};
        default:
            return state;
    }
}

export default rootReducer;