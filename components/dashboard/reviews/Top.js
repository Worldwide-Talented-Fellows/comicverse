import React from 'react';
import styles from './Top.module.css';
import AddCard from '../AddCard';

function Top() {
    return (
        <div>
            <div className={styles.top}>
                <div className={styles.heading}>My Reviews</div>
            </div>
            <div>
                <AddCard text="Add Review" />
            </div>
        </div>
    );
}

export default Top;
