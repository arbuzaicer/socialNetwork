import React from 'react';
import UserSingle from "./UserSingle/UserSingle";
import styles from "./Users.module.css";

let Users = (props) => {

    let usersArray = props.users.map((user) => {

            return <UserSingle key={user.id}
                               id={user.id}
                               name={user.name}
                               status={user.status}
                               followed={user.followed}
                               photos = {user.photos}
                               myId = {props.myId}
                               unfollowThunk = {() => {
                               props.unfollowThunk(user.id)}
                               }
                               followThunk = {() => {
                                   props.followThunk(user.id)}
                               }
            />
        }
    );

    let totalUsers = props.usersLength;
    let usersOnPage = props.usersOnPage;
    let totalPages = Math.ceil(totalUsers / usersOnPage);
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.usersContent}>
            <div className={styles.pagesButtonSection}>
                {pages.map( (p) => {
                    return <button key = {p} onClick={() => {props.setCurrentPage(p)}}
                                   className={props.currentPage === p ? styles.selectedPage: styles.default_styles}>{p}</button>
                })}
            </div>

            {usersArray}
        </div>
    )
};

export default Users;