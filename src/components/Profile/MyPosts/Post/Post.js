import React from 'react'
import styles from './Post.module.css'

const Post = (props) => {
    return (
        <div className={styles.posts}>
            <div className={styles.item}>
                {props.message}
                <div>likes: {props.like || 0}</div>
            </div>
        </div>
    )
}

export default Post;