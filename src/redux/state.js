let renderEntireTree = ()=> {
};

let state = {
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
            {id: 3, msg: 'asdasdsdsd'},
            {id: 3, msg: 'Cwerwer.'}
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
    }

};

window.state = state;

export const addPost = () => {
    let newPostedObj = {
        id: 5,
        message: state.profile.newPostChange,
        likeCount: 0
    };

    state.profile.posts.push(newPostedObj);
    state.profile.newPostChange = '';
    renderEntireTree(state);
};

export let updateNewPostChange = (Text) => {
    state.profile.newPostChange=Text;
    renderEntireTree(state);
};

export const addMessage = () => {
    let newMessage = {
        id: 5,
        msg: state.messages.currentMessage,
    };

    state.messages.messages.push(newMessage);
    state.messages.currentMessage = '';
    renderEntireTree(state);
};

export let updateNewMessage = (Text) => {
    state.messages.currentMessage=Text;
    renderEntireTree(state);
};

export let subscribe = (observer) => {
    renderEntireTree = observer;
};

export default state;