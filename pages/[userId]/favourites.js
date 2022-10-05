import React from 'react';
import FavouritesMainSection from '../../components/dashboard/favourites/FavouritesMainSection';
import styles from '../../styles/dashboard.module.css';
import DashboardSideNavbar from '../../components/dashboard/DashboardSideNavbar';

function Favourites() {
  return (
    <div className={styles.container}>
        {/* left side navbar  */}
        <DashboardSideNavbar />
        {/* <VerticalLine/> */}
        <div className={styles.vertical_line}></div>
        {/* right side section  */}
        <FavouritesMainSection />
    </div>
  )
}

export default Favourites;