export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const INVALID_SUBREDDIT = 'INVALID_SUBREDDIT';
export const CLEAR_LIST = 'CLEAR_LIST';
export const SET_FETCH_PENDING = "SET_FETCH_PENDING";

export const receivePosts = data => ({
    type: RECEIVE_POSTS,
    payload: data
})

export const invalidSubReddit = () => ({
    type: INVALID_SUBREDDIT
})

export const clearList = () => ({
    type: CLEAR_LIST
})

export const setFetchPending = () => ({
    type: SET_FETCH_PENDING
})

export const fetchPosts = subreddit => async dispatch => {
    // console.log("In fetchPosts.");
    try {
        dispatch(setFetchPending());
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        // console.log("RESPONSE: ", response);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            dispatch(receivePosts(data.data.children));
        } else {
            throw new Error("Request Failed!");
        }
    } catch (error) {
        console.log("In Catch ----------------------> ", error);
        dispatch(invalidSubReddit());
    }
}