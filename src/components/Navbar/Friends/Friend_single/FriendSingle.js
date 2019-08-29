import React from 'react'
import styles from "./Friend_single.module.css"
import UserIcon from './../../../../img/user-icon.png'
import {NavLink} from "react-router-dom";

const FriendSingle = (props) => {

    let cutNameLength = (name) => {
        if(name.length > 7) {
            let output = name.substr(0, 7);
            return output+'...';
        } else {
            return name;
        }
    };

    return (
        <div className={styles.userIcon}>
            <div>
                <NavLink to={`/profile/${props.id}`}>
                    <img className={styles.friendImg} src={props.photos.small || UserIcon} alt="somText"/>
                    <div title = {props.name} className={styles.friendName}>{cutNameLength(props.name)}</div>
                </NavLink>
            </div>
        </div>
    );
};

export default FriendSingle;
