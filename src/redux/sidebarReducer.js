import * as axios from "axios";

const SET_FRIENDS_LIST = 'SET_FRIENDS_LIST';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';

let initialState = {
    friends: null,
    totalUsers: null
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS_LIST: {
            return {
                ...state,
                friends: action.SidebarFriends
            }
        }
        case SET_TOTAL_USERS: {
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        }

        default: {
            return {...state};
        }

    }
};

/*Action creators*/

export const setFriendsList = (SidebarFriends) => {
    return {
        type: SET_FRIENDS_LIST,
        SidebarFriends
    }
};

export const setTotalUsers = (totalUsers) => {
    return {
        type: SET_TOTAL_USERS,
        totalUsers
    }
};

/*Thunks*/

export const setFriendsListThunk = () => {
    return (dispatch) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=49`).then((response) => {
            dispatch(setFriendsList(response.data.items));
        });
    }
};

export const setTotalUsersThunk = () => {
    return (dispatch) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then((response) => {
            dispatch(setTotalUsers(response.data.totalCount));
        })
    }
};

export default sidebarReducer;