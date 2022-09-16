import ContactPageMain from '../../components/contactPage/ContactPageMain';
import styles from '../../styles/contactPage/contact.module.css';
import FacebookIcon from '../../public/assets/contact_page/FacebookSVG';
import InstagramIcon from '../../public/assets/contact_page/InstagramSVG';
import TwitchIcon from '../../public/assets/contact_page/TwitterSVG';

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
                    <FacebookIcon className={styles.sidebar_item} />
                    <InstagramIcon className={styles.sidebar_item} />
                    <TwitchIcon className={styles.sidebar_item} />
                </div>
            </div>
            <ContactPageMain />
        </div>
    );
};

export default ContactPage;
