import styles from './Navbar.module.css';
function Navbar() {
    return (
        <ul className={styles.list}>
            <li>Published</li>
            <li>Completed</li>
            <li>Drafts</li>
            <li>Archived</li>
            <li>Trash</li>
        </ul>
    );
}

export default Navbar;
