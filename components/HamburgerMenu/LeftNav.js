import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/hamburger_menu.module.css';
import OverviewSVG from '../../public/assets/navbarSVG/OverviewSVG';
import CollectionsSVG from '../../public/assets/navbarSVG/CollectionsSVG';
import FavoritesSVG from '../../public/assets/navbarSVG/FavoritesSVG';
import LogoutSVG from '../../public/assets/navbarSVG/LogoutSVG';
import MystorySVG from '../../public/assets/navbarSVG/MystorySVG';
import ReviewsSVG from '../../public/assets/navbarSVG/ReviewsSVG';
import PeopleSVG from '../../public/assets/navbarSVG/PeopleSVG';
import SettingSVG from '../../public/assets/navbarSVG/SettingSVG';
import CancelSVG from '../../public/assets/navbarSVG/CancelSVG';

const LeftNav = ({ isOpen, setIsOpen }) => {
    if (!isOpen) return null;
    return (
        <div className={styles.leftnav_container}>
            <div className={styles.cancel} onClick={() => setIsOpen(false)}>
                <CancelSVG />
            </div>
            <ul className={styles.leftnav_holder}>
                <Link href={''}>
                    <a>
                        <div className={styles.logo}>
                            <OverviewSVG />
                            <li>Overview </li>
                        </div>
                    </a>
                </Link>
                <Link href={''}>
                    <a>
                        <div className={styles.logo}>
                            <CollectionsSVG />
                            <li>Collections </li>
                        </div>
                    </a>
                </Link>
                <Link href={''}>
                    <a>
                        <div className={styles.logo}>
                            <FavoritesSVG />
                            <li>Favorites </li>
                        </div>
                    </a>
                </Link>
                <Link href={''}>
                    <a>
                        <div className={styles.logo}>
                            <ReviewsSVG />
                            <li> Reviews</li>
                        </div>
                    </a>
                </Link>
                <Link href={''}>
                    <a>
                        <div className={styles.logo}>
                            <MystorySVG />
                            <li> My story</li>
                        </div>
                    </a>
                </Link>
                <Link href={''}>
                    <a>
                        <div className={styles.logo}>
                            <PeopleSVG />
                            <li>Friends </li>
                        </div>
                    </a>
                </Link>
                <Link href={''}>
                    <a>
                        <div className={styles.logo}>
                            <SettingSVG />
                            <li>Settings </li>
                        </div>
                    </a>
                </Link>
                <Link href={''}>
                    <a>
                        <div className={styles.logo}>
                            <LogoutSVG />
                            <li> Logout</li>
                        </div>
                    </a>
                </Link>
            </ul>
        </div>
    );
};

export default LeftNav;
