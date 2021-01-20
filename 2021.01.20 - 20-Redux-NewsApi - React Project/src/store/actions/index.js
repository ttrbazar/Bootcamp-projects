export const SELECT_CHANNEL = "SELECT_CHANNEL";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

const MY_API_KEY = process.env.REACT_APP_NEWSAPIORG_API_KEY;

export const getChannel = (channel) => ({
    type: SELECT_CHANNEL,
    payload: channel
});

export const requestPosts = () => ({
    type: REQUEST_POSTS
});

export const receivedPosts = (articles) => ({
    type: RECEIVE_POSTS,
    payload: articles
});

export function fetchPosts(channel) {
    return async dispatch => {
        const url = `https://newsapi.org/v2/top-headlines?sources=${channel}&apiKey=${MY_API_KEY}`;
        // console.log(url);
        dispatch(requestPosts());
        try {
            // console.log("IN TRY");
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                // console.log("Fetched data ----------> ", data);
                dispatch(receivedPosts(data.articles));
            } else {
                throw new Error("Request Failed!");
            }
        } catch (error) {
            console.log("In Catch ---------------> ", error);
        }
    }
};