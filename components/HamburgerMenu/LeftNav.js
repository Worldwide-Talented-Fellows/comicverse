import React from 'react';
import styles from '../../styles/hamburger_menu.module.css';
import OverviewSVG from '../../public/assets/navbarSVG/OverviewSVG';
import CollectionsSVG from '../../public/assets/navbarSVG/CollectionsSVG';
import FavoritesSVG from '../../public/assets/navbarSVG/FavoritesSVG';
import LogoutSVG from '../../public/assets/navbarSVG/LogoutSVG';
import MystorySVG from '../../public/assets/navbarSVG/MystorySVG';
import ReviewsSVG from '../../public/assets/navbarSVG/ReviewsSVG';

const LeftNav = ({ isOpen }) => {
    if (!isOpen) return null;
    return (
        <div className={styles.leftnav_container}>
            <ul>
                <div className={styles.logo}>
                    <OverviewSVG />
                    <li>Overview </li>
                </div>
                <div className={styles.logo}>
                    <CollectionsSVG />
                    <li>Collections </li>
                </div>

                <div className={styles.logo}>
                    <FavoritesSVG />
                    <li>Favorites </li>
                </div>

                <div className={styles.logo}>
                    <ReviewsSVG />
                    <li> Reviews</li>
                </div>

                <div className={styles.logo}>
                    <MystorySVG />
                    <li> My story</li>
                </div>

                <div className={styles.logo}>
                    <li>Friends </li>
                </div>

                <div className={styles.logo}>
                    <li>Settings </li>
                </div>

                <div className={styles.logo}>
                    <LogoutSVG />
                    <li> Logout</li>
                </div>
            </ul>
        </div>
    );
};

export default LeftNav;
