import React from 'react';

import Header from '../header';
import Content from '../content';

import styles from './main.module.scss';

const main = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Content />
        </div>
    );
}

export default main;