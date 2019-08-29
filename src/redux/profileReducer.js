import {DALconnection} from "../api/DALapi";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST-CHANGE';
const SET_PROFILE_USER_DATA = 'SET_PROFILE_USER_DATA';

let initialState = {
    profile: null,
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 5},
        {id: 2, message: 'Hello, i\'m fine', likeCount: 12},
        {id: 3, message: 'asdasdwedq', likeCount: 18},
        {id: 4, message: 'Hwhejkhekqweknqwkeh', likeCount: 2}
    ],
    newPostChange: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            if (state.newPostChange === '') alert("Empty Post");
            return {
                ...state,
                newPostChange: '',
                posts: [...state.posts, {
                    id: Object.keys(state.posts).length + 1,
                    message: state.newPostChange,
                    likeCount: 0
                }],
            };
        }
        case UPDATE_NEW_POST: {
            return {
                ...state,
                newPostChange: action.newText
            };
        }
        case SET_PROFILE_USER_DATA: {
            return {
                ...state,
                profile: {...action.profile}
            }
        }
        default: {
            return state;
        }
    }
};

/*Action creators*/

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST,
        newText: text
    }
};

export const setProfileUserData = (profile) => {
    return {
        type: SET_PROFILE_USER_DATA,
        profile
    }
};

/*Thunks*/

export const setProfileUserDataThunk = (paramsUserID, defaultUser) => {
    return (dispatch) => {
        let userID = paramsUserID;
        if (!userID) userID = defaultUser;
        DALconnection.profile.setUserData(userID).then(response => {
            dispatch(setProfileUserData(response.data));
        })
    }
};

export default profileReducer;