import React from 'react'
import styles from "./Friends.module.css"
import FriendSingle from "./Friend_single/FriendSingle";
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";


const Friends = (props) => {
    if(!props.friends) {
        return (
            <div className={styles.sibebarPreloader}>
                <Preloader />
            </div>
        )
    }

    let FriendsList = props.friends.map(friend => {
        return <FriendSingle
            name={friend.name}
            key = {friend.id}
            id={friend.id}
            photos = {friend.photos}
        />
    });
    return (
        <div className={styles.friendsSection}>
            <NavLink to={"/users"}>
                <p>Your friends <span className={styles.friendsCount}>{props.totalUsers}</span></p>
            </NavLink>
            <div className={styles.friendsList}>
                {FriendsList}
            </div>
        </div>
    );
};

export default Friends;
