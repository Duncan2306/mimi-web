import React from 'react';

import Nav from './nav';

import profileImg from './img/avatar.jpeg';
import songSrc from './audio/sayso.mp3';

import styles from './header.module.scss';

const Header = () => {
    return (
        <div className={styles.container}>
            <Nav />
            <div className={styles.avatarContainer}>
                <img src={profileImg} alt="mimi" className={styles.avatar} />
            </div>

            <div className={styles.audioContainer}>
                <audio
                    id='myAudio'
                    controls
                    autoPlay
                    loop
                    playsInline
                >
                    <source src={songSrc} type="audio/mpeg"></source>
                </audio>
            </div>
        </div>
    );
}

export default Header;