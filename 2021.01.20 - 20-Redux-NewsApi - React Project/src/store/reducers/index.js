import { SELECT_CHANNEL, REQUEST_POSTS, RECEIVE_POSTS } from "../actions";

const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CHANNEL:
            return {...state, selectedChannel: action.payload, loading: false};
        case REQUEST_POSTS:
            return {...state, loading: true}
        case RECEIVE_POSTS:
            return {...state, articles: action.payload, loading: false}
        default:
            return state;
    }
};

export default reducer;