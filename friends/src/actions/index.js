import axios from 'axios';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_ERROR = 'FETCH_FRIENDS_ERROR';
export const FETCH_FRIENDS_ADDED = 'FETCH_FRIENDS_ADDED';
export const FETCH_FRIENDS_ADDING = 'FETCH_FRIENDS_ADDING';

export const getFriend = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START });
    axios
        .get('http://localhost:5000/api/friends')
        .then(response => {
            console.log(response)
            dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: response.data })
        })
        .catch(error => dispatch({ type: FETCH_FRIENDS_ERROR, payload: error }))
}
export const postFriend = friend => dispatch => {
    dispatch({ type: FETCH_FRIENDS_SUCCESS })
}