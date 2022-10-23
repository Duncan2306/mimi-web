import React, { useState } from 'react';

import { LIST } from './constants';

import Detail from './item';

import styles from './content.module.scss';

const Content = () => {
    const [isShowItem, setShowItem] = useState(false);
    const [item, setItem] = useState('');

    const handleOnClickItem = (i) => {
        setShowItem(true);
        setItem(i);
    }

    return (
        <div className={styles.container}>
            {!isShowItem
                ? <h2 className={styles.heading}>Vui chơi có thưởng</h2>
                : (
                    <h2
                        className={styles.heading}
                        onClick={() => setShowItem(false)}
                        style={{ cursor: 'pointer',  display: 'inline-block' }}
                    >
                        Back
                    </h2>
                )
            }

            {isShowItem ? (
                <Detail item={item} />
            ) : (
                <ul>
                    {LIST && LIST.map((e, i) => (
                        <li key={i} onClick={() => handleOnClickItem(e)}>{i + 1}. {e.ask} ?</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Content;