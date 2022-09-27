import React from 'react';
import styles from '../../styles/dashboard.module.css';
import DashboardSideNavbar from '../../components/dashboard/DashboardSideNavbar';
import ReviewsMainSection from '../../components/dashboard/reviews/ReviewsMainSection';

function Reviews(props) {
  console.log("main");
  return (
    <div className={styles.container}>
        {/* left side navbar  */}
        <DashboardSideNavbar />
        {/* <VerticalLine/> */}
        <div className={styles.vertical_line}></div>
        {/* right side section  */}
        <ReviewsMainSection />
    </div>
  )
}

export default Reviews;