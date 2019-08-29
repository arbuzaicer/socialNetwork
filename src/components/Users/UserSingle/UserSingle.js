import React from 'react';
import styles from './UserSingle.module.css'
import userIcon from './../../../img/user-icon.png'
import {NavLink} from "react-router-dom";

let UserSingle = (props) => {
    return (
        <div className={styles.contentArea}>
            <div className={styles.userLogo}>
                <NavLink to={`/profile/${props.id}`}>
                    <img className={styles.userIcon} src={props.photos.small || userIcon} alt={`userIcon${props.id}`}/>
                </NavLink>
                {props.id === props.myId ? <div></div> :
                    props.followed ?
                        <button onClick={() => {
                            props.unfollowThunk(props.id);
                        }}
                                className={styles.followButton}>Unfollow</button> :
                        <button onClick={() => {
                            props.followThunk(props.id)
                        }}
                                className={styles.followButton}>Follow</button>}
            </div>
            <div className={styles.userContent}>
                <div className={styles.text}>
                    {props.id === props.myId ?
                        <h3>{props.name} <span className={styles.userInitialized}>(это вы)</span></h3> :
                        <h3>{props.name}</h3>}

                    <p className={styles.userStatus}>{props.status}</p>
                </div>
                <div className={styles.location}>
                    <h4>{"user.country"}</h4>
                    <h4>{"user.city"}</h4>
                </div>
            </div>
        </div>
    )
};

export default UserSingle;