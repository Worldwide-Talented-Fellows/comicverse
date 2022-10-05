import React from 'react';
import styles from './ReviewsMainSection.module.css';
import Top from './Top';
import Bottom from './Bottom';


function ReviewsMainSection() {
  console.log("main");
  return (
    <div className={styles.container}>
      <Top></Top>
      <Bottom></Bottom>
    </div>
  )
}

export default ReviewsMainSection;