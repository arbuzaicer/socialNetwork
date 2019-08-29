import React from 'react'
import styles from "./Nabvar.module.css"
import {NavLink} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";
import homeIcon from './../../img/menu_icons/Home-icon.png'
import messagesIcon from './../../img/menu_icons/messages-icon.png'
import usersIcon from './../../img/menu_icons/users-icon.png'
import newsIcon from './../../img/menu_icons/news-icon.png'
import musicIcon from './../../img/menu_icons/music-icon.png'
import settingsIcon from './../../img/menu_icons/settings-icon.png'

const Navbar = (props) => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to={"/profile"} activeClassName={styles.activeLink}>
                    <div className={styles.some}>
                        <img className={styles.MenuIcons} src={homeIcon} alt="toHome"/>
                        <span className={styles.MenuList}>Profile</span>
                    </div>
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/dialogs" activeClassName={styles.activeLink}>
                    <div className={styles.some}>
                        <img className={styles.MenuIcons} src={messagesIcon} alt="toMessages"/>
                        <span className={styles.MenuList}>Messages</span>
                    </div>
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/users" activeClassName={styles.activeLink}>
                    <div className={styles.some}>
                        <img className={styles.MenuIcons} src={usersIcon} alt="toUsers"/>
                        <span className={styles.MenuList}>Users</span>
                    </div>
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/news" activeClassName={styles.activeLink}>
                    <div className={styles.some}>
                        <img className={styles.MenuIcons} src={newsIcon} alt="toNews"/>
                        <span className={styles.MenuList}>News</span>
                    </div>
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/music" activeClassName={styles.activeLink}>
                    <div className={styles.some}>
                        <img className={styles.MenuIcons} src={musicIcon} alt="toMusic"/>
                        <span className={styles.MenuList}>Music</span>
                    </div>
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/settings" activeClassName={styles.activeLink}>
                    <div className={styles.some}>
                        <img className={styles.MenuIcons} src={settingsIcon} alt="toSettings"/>
                        <span className={styles.MenuList}>Settings</span>
                    </div>
                </NavLink>
            </div>
            <div>
                <FriendsContainer/>
            </div>
        </nav>
    );
};

export default Navbar;
