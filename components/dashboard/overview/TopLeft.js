import React from 'react';
import styles from './topLeft.module.css'

function TopLeft() {
  return (
    <div className={styles.container}>
        <div>
            Hi, <strong>Jack</strong><p>Continue reading from where you stop...</p>
        </div>
        <div>
            <p>Jack Miller</p>
            <h2>Batman:<br/>The Dark Night Returns</h2>
        </div>
    </div>
  )
}

export default TopLeft