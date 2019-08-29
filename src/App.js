import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import {Route} from "react-router-dom";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainerConnect from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App(props) {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path={'/profile/:userId?'} render={() => {
                    return <ProfileContainerConnect />
                }}/>
                <Route path='/dialogs' render={() => {
                    return <DialogsContainer />
                }}/>
                <Route path='/users' render={() => {
                    return <UsersContainer />
                }}/>
                <Route path='/news' render={News}/>
            </div>
        </div>
    )
}

export default App;

