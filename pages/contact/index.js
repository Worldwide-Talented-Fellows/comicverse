import ContactPageMain from '../../components/contactPage/ContactPageMain';
import styles from '../../styles/contactPage/contact.module.css';
import FacebookIcon from '../../public/assets/contact_page/FacebookSVG';
import InstagramIcon from '../../public/assets/contact_page/InstagramSVG';
import TwitterIcon from '../../public/assets/contact_page/TwitterSVG';

const ContactPage = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h3>Contact Us </h3>
                <p>
                    Feel Free to contact us we will get back to you as soon as
                    we can!
                </p>
            </header>
            <div className={styles.sidebar}>
                <div className={styles.sidebar_items}>
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FacebookIcon className={styles.sidebar_item} />
                    </a>
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <InstagramIcon className={styles.sidebar_item} />
                    </a>
                    <a
                        href="https://twitter.com/?lang=en"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <TwitterIcon className={styles.sidebar_item} />
                    </a>
                </div>
            </div>
            <ContactPageMain />
        </div>
    );
};

export default ContactPage;
