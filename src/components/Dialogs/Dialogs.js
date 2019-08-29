import React from 'react'
import styles from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let message = props.messages.map(item => {
        return <Message state={item.msg} key = {item.id}/>
    });

    let addMsg = () => {
        props.addMsg();
    };
    let updateNewMessage = (e) => {
        let text = e.target.value;
        props.updateNewMessage(text);
    };

    return (
        <div>
            <div className={styles.dialogs}>
                <div className={styles['dialogs-items']}>
                    {(props.dialogsData).map((item) => {
                        return <DialogItem name={item.name} key = {item.id} id={item.id}/>;
                    })}
                </div>
                <div className={styles.messages}>
                    {message}
                </div>
            </div>
            <div className={styles.textArea}>
                <textarea onChange={updateNewMessage} value={props.currentMessage} placeholder={'Enter Your message'}/>
                <button onClick={addMsg}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;
