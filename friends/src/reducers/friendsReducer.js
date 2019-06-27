import { FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_ERROR, FETCH_FRIENDS_ADDED, FETCH_FRIENDS_ADDING } from "../actions";

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsAdded: false,
    addingFriends: false,
    friends: [],
    error: null
};
export const friendsReducer = (state = initialState, action ) => {
    switch (action.type) {
        case FETCH_FRIENDS_START:
            return {
                ...state,
                fetchingFriends: true,
            }
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                friendsFetched: true,
                friends: action.payload
            }
        case FETCH_FRIENDS_ERROR:
            return {
                ...state,
                error: action.payload,
                fetchingFriends: false
            }
        case FETCH_FRIENDS_ADDING:
            return {
                ...state,
                friendsFetched: true,
                addingFriends: true,
            }
        case FETCH_FRIENDS_ADDED:
            return {
                ...state,

            }
        default:
            return state;
    }
}