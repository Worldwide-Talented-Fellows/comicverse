import React from 'react';
import Top from './Top';
import styles from './MainSection.module.css'

function MainSection() {
  return (
    <div className={styles.container}>
        <Top/>
        {/* <Bottom/> */}
    </div>
  )
}

export default MainSection