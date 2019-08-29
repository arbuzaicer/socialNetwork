const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let initialState = {
    messages: [
        {id: 1, msg: 'Hi'},
        {id: 2, msg: 'How are YOU?'},
        {id: 3, msg: 'Chat testing.'},
        {id: 4, msg: 'asdasdsdsd'},
        {id: 5, msg: 'Cwerwer.'}
    ],
    currentMessage: '',
    dialogsData: [
        {id: 77, name: 'John'},
        {id: 2, name: 'Pette'},
        {id: 3, name: 'Sam'},
        {id: 4, name: 'Ashley'},
        {id: 5, name: 'Kylie'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                currentMessage: '',
                messages: [...state.messages, {
                    id: Object.keys(state.messages).length + 1,
                    msg: state.currentMessage,
                }]
            };
        }
        case UPDATE_MESSAGE: {
            return {
                ...state,
                currentMessage: action.newText
            };
        }
        default:
            return state;
    }
};

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
};

export const updateMessageActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE,
        newText: text
    }
};

export default dialogsReducer;