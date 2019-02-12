const initialState = {
    user: ''
};

function userReducer(state = initialState, action) {
    if (action.type === "ADD_USER") {
        return { user: action.payload }
    }
    return state;
};

export default userReducer;