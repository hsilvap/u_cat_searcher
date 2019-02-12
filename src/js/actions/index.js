import axios from 'axios';

export function AddUser(payload) {
    return { type: "ADD_USER", payload }
};

export function AddCats() {
    return function (dispatch) {
        dispatch(beginGetCatImage());

        return axios({
            method: 'get',
            url: 'https://api.thecatapi.com/v1/images/search',
            headers: { 'x-api-key': '36f66790-4986-4490-a054-b26952d733fc' }
        }).then(({ data }) => {
            dispatch(setCatImage(data[0].url, false));
        });
    };
};

function setCatImage(data, loading) {
    return {
        type: "ADD_CATS",
        payload: { cat: data, loading }
    }
}

function beginGetCatImage() {
    return {
        type: "BEGIN_GET_CATS",
    }
}