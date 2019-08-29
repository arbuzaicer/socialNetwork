import React from 'react'
import styles from './DialogItem.module.css'
import {NavLink} from 'react-router-dom';
import userIcon from './../../../img/user-icon.png'

const DialogItem = (props) => {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <img className={styles['user-icon']} src={userIcon} alt="user_icon"/>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;
