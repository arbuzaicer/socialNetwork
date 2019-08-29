import React from 'react'
import Logo from "../../img/Logo.png"
import styles from './Header.module.css'
import {NavLink} from 'react-router-dom';
import YourLogo from './../../img/myLogo.jpg'

const Header = (props) => {

    return (
        <header className={styles.header}>

                <div className={styles.logoArea}>
                    <img className={styles.logo} src={Logo} alt="My Logo"/>
                </div>
                <div className={styles.userLoginInfo}>
                    {
                        props.isAuth ? <div className={styles.userLoggedInfo}>
                                <img src={YourLogo} alt="yourLogo"/>
                                <p>{props.login}</p>
                            </div> :
                            <NavLink className={styles.login} to = {'/login'}>Login</NavLink>
                    }
                </div>

        </header>
    );
};

export default Header;
