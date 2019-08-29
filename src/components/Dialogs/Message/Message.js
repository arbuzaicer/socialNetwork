import React from 'react'
import styles from './Message.module.css'

const Message = (props) => {
    return (
        <div className={styles.message}>
            {props.state}
        </div>
    )
};

export default Message;
