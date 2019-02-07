import { FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_ERROR } from "../actions";

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
        default:
            return state;
    }
}