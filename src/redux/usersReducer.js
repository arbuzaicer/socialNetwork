import {DALconnection} from "../api/DALapi";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_LENGTH = 'SET_USERS_LENGTH';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    usersLength: 80,
    currentPage: 1,
    pageCounter: 80,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }

        case FOLLOW : {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                })
            };
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                })
            };
        }
        case SET_USERS_LENGTH: {
            return {
                ...state,
                usersLength: action.totalLength
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        default:
            return state;
    }
};

/*Action creators*/

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
};

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
};

export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
};

export const setTotalUsersLength = (totalLength) => {
    return {
        type: SET_USERS_LENGTH,
        totalLength
    }
};

export const setCurrentUsersPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
};

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
};


/*Thunk areas*/

export const unfollowThunk = (id) => {
    return (dispatch) => {
        DALconnection.users.unfollowUser(id)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(unfollow(id));
                }
            });
    }
};

export const followThunk = (id) => {
    return (dispatch) => {
        DALconnection.users.followUser(id)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(follow(id));
                }
            });
    }
}

export const getUsersThunk = (currentPage, count) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        DALconnection.users.getUsers(currentPage, count)
            .then(response => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(response.items));
                dispatch(setTotalUsersLength(response.totalCount));
            })
    }
};

export const setCurrentPageThunk = (currentPage, count) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentUsersPage(currentPage));
        DALconnection.users.getUsersPages(currentPage, count).then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.items));
        })
    }
};

export default usersReducer;