//! make different active class

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Logo from '../public/assets/Logo.png';
import SearchIconSVG from '../public/assets/SearchIconSVG';
import ProfileIconSVG from '../public/assets/ProfileIconSVG';
import Hamburger from './HamburgerMenu/Hamburger';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
    const [searchBar, setSearchBar] = useState('');

    const navRoutes = {
        '/': 'Home',
        '/comics': 'All Comics',
        '/about': 'About',
        '/contact': 'Contact',
    };
    const router = useRouter();

    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.logo_container}>
                    <Link href={'/'}>
                        <Image
                            src={Logo}
                            width={50}
                            height={50}
                            alt="logo"
                            className={styles.logo_image}
                        />
                    </Link>
                </div>

                <ul className={styles.link_container}>
                    {Object.keys(navRoutes).map((path, index) => {
                        let isActive = false;
                        if (path === router.asPath) {
                            isActive = true;
                        }

                        return (
                            <li
                                className={` ${styles.link_item} ${
                                    isActive && styles.link_item_active
                                }`}
                                key={index}
                            >
                                <Link href={path}>{navRoutes[path]}</Link>
                            </li>
                        );
                    })}
                </ul>

                <div className={styles.search_bar_container}>
                    <SearchIconSVG className={styles.search_bar_svg} />
                    <input
                        className={styles.search_bar}
                        value={searchBar}
                        onChange={(e) => setSearchBar(e.target.value)}
                        placeholder="Search comic..."
                    />
                </div>

                <div className={styles.profile_icon_container}>
                    <ProfileIconSVG />
                </div>
            </div>
            <Hamburger />
        </div>
    );
};

export default Navbar;
