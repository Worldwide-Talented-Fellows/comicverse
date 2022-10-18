import React, { useState } from 'react';
import styles from '../../styles/hamburger_menu.module.css';
import SearchIconSVG from '../../public/assets/SearchIconSVG';
import CancelSVG from '../../public/assets/navbarSVG/CancelSVG'

import LeftNav from './LeftNav';

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div>
            <div className={styles.hamburger_container}>
                <div
                    className={styles.burger_icon}
                  
                    onClick={() => setIsOpen(true)}
                >
                    |||
                </div>
                {!isClicked ? (
                    <SearchIconSVG
                        className={styles.icon}
                        onClick={() => setIsClicked(true)}
                    />
                ) : (
                    <div className= {styles.searchbox} >

                        <input type="text" className={styles.input_field}  placeholder = 'search here...' />
                        <CancelSVG />
                    </div>
                )}
            </div>
            <LeftNav isOpen={isOpen} setIsOpen = {setIsOpen} />
         
        </div>
    );
};

export default Hamburger;
