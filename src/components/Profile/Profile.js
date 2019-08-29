import React from 'react'
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={styles['profile-section']}>
            <ProfileInfo profile={props.profile}
            />
            <MyPosts posts={props.posts}
                     addPost={props.addPost}
                     updatePostText={props.updatePostText}
                     newPostChange={props.newPostChange}
            />
        </div>
    )
};

export default Profile;
