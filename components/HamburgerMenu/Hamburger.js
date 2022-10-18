import React, { useState } from 'react';
import styles from '../../styles/hamburger_menu.module.css';
import SearchIconSVG from '../../public/assets/SearchIconSVG';

import LeftNav from './LeftNav';

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div>
            <div className={styles.hamburger_container}>
                <div
                    className={styles.burger_icon}
                    // open={open}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    |||
                </div>
                {!isClicked && (
                    <SearchIconSVG
                        className={styles.icon}
                        onClick={() => setIsClicked(true)}
                    />
                )}

                {isClicked && (
                    <div>
                        <input type="text" className={styles.input_field} />
                    </div>
                )}
            </div>
            <LeftNav isOpen={isOpen} />
        </div>
    );
};

export default Hamburger;
