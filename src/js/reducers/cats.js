const initialState = {
    cat: '',
    loading: false
};

function catReducer(state = initialState, action) {
    if (action.type === "ADD_CATS") {
        return action.payload
    }
    if (action.type === "BEGIN_GET_CATS") {
        return { cat: "", loading: true }
    }
    return state;
};

export default catReducer;