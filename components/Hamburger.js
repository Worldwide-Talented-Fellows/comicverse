import React from 'react';
import styles from '../styles/hamburger_menu.module.css';
import SearchIconSVG from '../public/assets/SearchIconSVG';

const Hamburger = () => {
    return (
        <div className={styles.hamburger_container}>
            <div className={styles.burger_icon}>|||</div>

            <SearchIconSVG className={styles.icon} />
        </div>
    );
};

export default Hamburger;
