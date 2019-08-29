import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profile: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 5},
                {id: 2, message: 'Hello, i\'m fine', likeCount: 12},
                {id: 3, message: 'asdasdwedq', likeCount: 18},
                {id: 4, message: 'Hwhejkhekqweknqwkeh', likeCount: 2}
            ],
            newPostChange: 'Some String'
        },
        messages: {
            messages: [
                {id: 1, msg: 'Hi'},
                {id: 2, msg: 'How are YOU?'},
                {id: 3, msg: 'Chat testing.'},
                {id: 4, msg: 'asdasdsdsd'},
                {id: 5, msg: 'Cwerwer.'}
            ],
            currentMessage: 'message text',
            dialogsData: [
                {id: 77, name: 'John'},
                {id: 2, name: 'Pette'},
                {id: 3, name: 'Sam'},
                {id: 4, name: 'Ashley'},
                {id: 5, name: 'Kylie'}
            ]
        },
        sidebar: {
            friends: [
                {id: 77, name: 'John'},
                {id: 2, name: 'Pette'},
                {id: 3, name: 'Sam'},
                {id: 4, name: 'Ashley'},
                {id: 5, name: 'Kylie'}
            ]
        },
    },
    _callSubscriber () {
    },

    getState ()  {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        profileReducer(this._state.profile, action);
        dialogsReducer(this._state.messages, action);
        sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};

window.store = store;

export default store;