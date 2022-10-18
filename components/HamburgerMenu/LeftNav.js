import React from 'react';
import Link from 'next/link';
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
                            <li>Friends </li>
                        </div>
                    </a>
                </Link>
                <Link href={''}>
                    <a>
                        <div className={styles.logo}>
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
