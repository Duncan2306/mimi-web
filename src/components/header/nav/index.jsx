import React from 'react';

import logo from '../img/logo.jpeg';

import styles from './nav.module.scss';

const Nav = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img
                    src={logo}
                    alt=""
                    className={styles.logo}
                    onClick={() => {
                        window.open('https://www.facebook.com/mymieo', '_blank')
                    }}
                />
                <p className={styles.left}>Mimi Chill</p>
            </div>
        </div>
    );
}

export default Nav;