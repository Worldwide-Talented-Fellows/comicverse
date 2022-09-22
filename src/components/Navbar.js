
import Link from 'next/link';
import styles from '../../styles/home.module.css';
import {} from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav id={styles.nav}>
            <span></span>
            <Link href="">
                <a>Home</a>
            </Link>
            <Link href="">
                <a>All Comics</a>
            </Link>
            <Link href="">
                <a>About</a>
            </Link>
            <Link href="">
                <a>Contacts</a>
            </Link>
            <input type="text" name="text" placeholder="search comics" />
            <div>
                <h4>LogIn</h4>
               
            </div>
        </nav>
    );
};

export default Navbar;
