import React, { useState } from 'react';

import styles from './item.module.scss';

const Item = (props) => {
    const { item = {} } = props;

    const [yes, setYes] = useState('');

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {yes === 0 && (
                    <>
                        <p className={styles.ans}>{item?.yes}</p>
                    </>
                )} 

                {yes === 1 && (
                    <>
                        <p className={styles.ans}>{item?.no}</p>
                    </>
                )}

                {yes === 0 && (
                    <img src={item?.img} alt="" className={styles.img} />
                )}
            </div>

            <div className={styles.buttonContainer}>
                <button onClick={() => setYes(0)} className={styles.button} style={{ backgroundColor: 'rgb(89, 20, 40)' }}>
                    có &#128525;
                </button>

                <button onClick={() => setYes(1)} className={styles.button} style={{ backgroundColor: '#070824' }}>
                    không &#128512;
                </button>
            </div>
        </div>
    );
}

export default React.memo(Item);