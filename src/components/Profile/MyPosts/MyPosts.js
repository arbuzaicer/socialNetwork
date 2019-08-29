import React from 'react'
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postMessages = props.posts.map((msg) => {

        return <Post message={msg.message} key ={msg.id}  like={msg.likeCount}/>
    });

    let addPost = () => {
        props.addPost();
    };

    let updatePostText = (e) => {
        let text = e.target.value;
        props.updatePostText(text);
    };


    return (
        <div className={styles['posts-section']}>
            <div className={styles.postBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea
                            onChange={updatePostText}
                            value={props.newPostChange}
                            placeholder={'Write Your post here'}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
            </div>
            {postMessages}
        </div>
    )
};

export default MyPosts;