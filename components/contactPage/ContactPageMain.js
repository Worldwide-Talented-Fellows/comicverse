import styles from '../../styles/contactPage/contactMain.module.css';
import MailSVG from '../../public/assets/contact_page/MailSVG';
import PhoneSVG from '../../public/assets/contact_page/PhoneSVG';
import StreetSVG from '../../public/assets/contact_page/StreetSVG';
import TimeSVG from '../../public/assets/contact_page/TimeSVG';

const ContactPageMain = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}></div>

            <div className={styles.item}>
                <form className={styles.form_container}>
                    <div className={styles.names_container}>
                        <div className={styles.names_div}>
                            <label htmlFor="first_name">First Name</label>
                            <input
                                type="text"
                                id="first_name"
                                name="fname"
                                placeholder="John"
                            />
                        </div>

                        <div className={styles.names_div}>
                            <label htmlFor="last_name">Last Name</label>
                            <input
                                type="text"
                                id="last_name"
                                name="lname"
                                placeholder="Doe"
                            />
                        </div>
                    </div>

                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="JohnDoe@gmail.com"
                    />

                    <label htmlFor="message">Message</label>
                    <input
                        type="text"
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        className={styles.message_area}
                    />

                    <button type="submit" className={styles.submit_button}>
                        Send message
                    </button>
                </form>
            </div>

            <div className={styles.item}>
                <h3>Info</h3>
                <div className={styles.paragraph_div}>
                    <MailSVG />
                    <p>comicverse@org.zm</p>
                </div>
                <div className={styles.paragraph_div}>
                    <PhoneSVG />
                    <p>+234 806 492 9671</p>
                </div>
                <div className={styles.paragraph_div}>
                    <StreetSVG />
                    <p>Street no.</p>
                </div>
                <div className={styles.paragraph_div}>
                    <TimeSVG />
                    <p>09:00-18:00</p>
                </div>
            </div>
        </div>
    );
};

export default ContactPageMain;
