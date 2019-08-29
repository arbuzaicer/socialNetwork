import React from 'react'
import UserLogo from '../../../img/UserLogo.jpg'
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import facebook from './../../../img/socialIcons/icons8-facebook-100.png'
import twitter from './../../../img/socialIcons/icons8-twitter-100.png'
import instagram from './../../../img/socialIcons/icons8-instagram-100.png'
import github from './../../../img/socialIcons/icons8-github-96.png'
import vk from './../../../img/socialIcons/icons8-vk.com-100.png'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    let socialLinks = {
        facebook: props.profile.contacts.facebook || 'facebook.com',
        twitter: props.profile.contacts.twitter || 'twitter.com',
        instagram: props.profile.contacts.instagram || 'instagram.com',
        gitHub: props.profile.contacts.github || 'github.com',
        vk: props.profile.contacts.vk || 'vk.com'
    };

    let serchingWorkStatus = () => {
        if (props.profile.lookingForAJob) {
            return (
                'Ищу работу React разработчика'
            )
        } else {
            return (
                'Ничего не ищу.'
            )
        }
    };

    return (
        <div>
            {!props.profile && <Preloader/>}
            <div className={styles['main-info']}>
                <div className={styles.UserMain}>
                    <img className={styles.UserLogo} src={props.profile.photos.large || UserLogo} alt='profile Avatar'/>
                    <p>...{props.profile.aboutMe}</p>
                </div>
                <div className={styles.UserInfo}>
                    <p className={styles.userName}>{props.profile.fullName}</p>
                    <p>Статус поиска работы: {serchingWorkStatus()}</p>
                    <p>Web site: some url</p>
                    <div className={styles.socialIcons}>
                        <a href={`https://${socialLinks.facebook}`}><img src={facebook} alt="social_icons"/></a>
                        <a href={`https://${socialLinks.twitter}`}><img src={twitter} alt="social_icons"/></a>
                        <a href={`https://${socialLinks.instagram}`}><img src={instagram} alt="social_icons"/></a>
                        <a href={`https://${socialLinks.gitHub}`}><img src={github} alt="social_icons"/></a>
                        <a href={`https://${socialLinks.vk}`}><img src={vk} alt="social_icons"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
