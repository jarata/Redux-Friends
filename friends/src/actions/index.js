import axios from 'axios';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_ERROR = 'FETCH_FRIENDS_ERROR';

export const getFriend = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START });
    axios.get('http://localhost:5000/api/friends')
        .then(response => dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: console.log(response.data) }))
        .catch(error => dispatch({ type: FETCH_FRIENDS_ERROR, payload: error }))
}