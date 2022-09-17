import styles from '../styles/footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.grid_container}>
                <div>
                    <h3 className={styles.column_caption}>Site</h3>
                    <p className={styles.column_paragraph}>About</p>
                    <p className={styles.column_paragraph}>How to use</p>
                </div>

                <div>
                    <h3 className={styles.column_caption}>Support</h3>
                    <p className={styles.column_paragraph}>Help Center</p>
                    <p className={styles.column_paragraph}>Privacy Policy</p>
                    <p className={styles.column_paragraph}>
                        Terms and Conditions
                    </p>
                </div>

                <div>
                    <h3 className={styles.column_caption}>Contact</h3>
                    <p className={styles.column_paragraph}>
                        comicverse@contact.com
                    </p>
                    <p className={styles.column_paragraph}>+123 456 789 000</p>
                </div>
            </div>
            <h3 className={styles.test}>Copyright comicverse 2022</h3>
        </footer>
    );
};

export default Footer;
