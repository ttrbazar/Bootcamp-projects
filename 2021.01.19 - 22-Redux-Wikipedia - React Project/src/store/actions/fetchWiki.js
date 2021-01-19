export const SEND = "SEND";
export const CLEAR = "CLEAR";

const sendResults = data => ({
    type: SEND,
    payload: data
})

const clearResults = () => ({ type: CLEAR })

const extractWikiPagesFromData = data => {
    const result = [];
    for (let i = 0; i < data[1].length; i++) {
        result.push({ name: data[1][i], link: data[3][i] });
    }
    return result;
}

export const getWikies = (searchValue = "") => async dispatch => {
    if (searchValue === "") {
        dispatch(clearResults());
    } else {
        try {
            const response = await fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchValue}&format=json&origin=*&limit=10`);
            if (response.ok) {
                const data = await response.json();
                dispatch(sendResults(extractWikiPagesFromData(data)));
            } else {
                throw new Error("Request Failed!");
            }
        } catch (error) {
            console.log("In Catch ----------------------> ", error);
        }
    }
}