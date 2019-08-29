import React from 'react';
import styles from './Preloader.module.css'
import preloader from '../../../img/preloader.gif';

let Preloader = (props) => {

    return (
        <div className={styles.preloader}>
            <img src={preloader} alt="preloader"/>
        </div>
    )
};

export default Preloader;
