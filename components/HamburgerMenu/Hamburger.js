import React, { useState } from 'react';
import styles from '../../styles/hamburger_menu.module.css';
import SearchIconSVG from '../../public/assets/SearchIconSVG';
import LeftNav from './LeftNav';

const Hamburger = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className={styles.hamburger_container}>
                <div
               
                    className={styles.burger_icon}
                    open={open}
                    onClick={({ open }) => setOpen(!open)}
                >
                    |||
                </div>
                <SearchIconSVG className={styles.icon} />
            </div>
            <LeftNav />
        </div>
    );
};

export default Hamburger;
