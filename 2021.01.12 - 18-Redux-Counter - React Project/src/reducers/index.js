const INITIAL_STATE = { counter: 0 };

const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, counter: state.counter + 1 };
        case "DECREMENT":
            return { ...state, counter: state.counter - 1 };
        case "RESET":
            return { ...state, counter: 0};
        default:
            return state;
    }
}

export default counterReducer;