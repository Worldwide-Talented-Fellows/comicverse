import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../styles/navbar.module.css';
import SearchIconSVG from '../public/assets/SearchIconSVG';
import ProfileIconSVG from '../public/assets/ProfileIconSVG';

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
        <div className={styles.navbar}>
            <div>
                <Link href={'/'}>LOGO</Link>
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
            <ProfileIconSVG />
        </div>
    );
};

export default Navbar;
