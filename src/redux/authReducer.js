const SET_AUTH_DATA = 'SET_AUTH_DATA';

let initialState = {
    data: {
        id: null,
        login: null,
        email: null
    },
    messages: null,
    isAuthenticating: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                data: {
                    id: action.authData.id,
                    login: action.authData.login,
                    email: action.authData.email
                },
                isAuthenticating: true
            }
        }
        default:
            return state;
    }
};

export const setAuthData = (authData) => {
    return {
        type: SET_AUTH_DATA,
        authData
    }
};


export default authReducer;