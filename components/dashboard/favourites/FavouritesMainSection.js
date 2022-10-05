import React from 'react';
import styles from './FavouritesMainSection.module.css';
import Top from './Top';
import Bottom from './Bottom';

function FavouritesMainSection() {
  return (
    <div className={styles.container}>
      <Top></Top>
      <Bottom></Bottom>
    </div>
  )
}

export default FavouritesMainSection