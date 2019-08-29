import {applyMiddleware, combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebarReducer";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profile: profileReducer,
    messages: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.staire = store;
export default store;