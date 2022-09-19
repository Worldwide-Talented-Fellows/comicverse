import { useState } from 'react';

import styles from '../../styles/contactPage/contactMain.module.css';
import MailSVG from '../../public/assets/contact_page/MailSVG';
import PhoneSVG from '../../public/assets/contact_page/PhoneSVG';
import StreetSVG from '../../public/assets/contact_page/StreetSVG';
import TimeSVG from '../../public/assets/contact_page/TimeSVG';

const contactInitial = {
    fname: '',
    lname: '',
    email: '',
    message: '',
};

const ContactPageMain = () => {
    const [contact, setContact] = useState(contactInitial);
    const [isDirty, setIsDirty] = useState({
        fname: false,
        lname: false,
        email: false,
        message: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleChangeDirty = (e) => {
        const { name } = e.target;
        setIsDirty((prevState) => ({
            ...prevState,
            [name]: true,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contact);
        setContact(contactInitial);
    };

    return (
        <div className={styles.container}>
            <div className={styles.item}></div>

            <div className={styles.item}>
                <form
                    className={styles.form_container}
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <div className={styles.names_container}>
                        <div className={styles.names_div}>
                            <label htmlFor="first_name">First Name</label>
                            <input
                                type="text"
                                id="first_name"
                                name="fname"
                                placeholder="John"
                                value={contact.fname}
                                onChange={(e) => handleChange(e)}
                                onBlur={(e) => handleChangeDirty(e)}
                                pattern="^[A-Za-z]{3,16}$"
                                required
                                focused={isDirty.fname.toString()}
                            />
                            <span className={styles.error}>
                                Name should not include any special characters
                                min length 3, max length 16
                            </span>
                        </div>

                        <div className={styles.names_div}>
                            <label htmlFor="last_name">Last Name</label>
                            <input
                                type="text"
                                id="last_name"
                                name="lname"
                                placeholder="Doe"
                                value={contact.lname}
                                onChange={(e) => handleChange(e)}
                                onBlur={(e) => handleChangeDirty(e)}
                                pattern="^[A-Za-z]{3,16}$"
                                required
                                focused={isDirty.lname.toString()}
                            />
                            <span className={styles.error}>
                                Last Name should not include any special
                                characters min length 3, max length 16
                            </span>
                        </div>
                    </div>

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="JohnDoe@gmail.com"
                        value={contact.email}
                        onChange={(e) => handleChange(e)}
                        onBlur={(e) => handleChangeDirty(e)}
                        required
                        focused={isDirty.email.toString()}
                    />
                    <span className={styles.error}>Invalid email</span>

                    <label htmlFor="message">Message</label>
                    <textarea
                        type="text"
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        value={contact.message}
                        onChange={(e) => handleChange(e)}
                        onBlur={(e) => handleChangeDirty(e)}
                        className={styles.message_area}
                        maxLength={700}
                        minLength={15}
                        required
                        focused={isDirty.message.toString()}
                    />
                    <div className={styles.error}>Minimum 15 letters</div>
                    <div>{contact.message.length} of 700</div>

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
                <div className={styles.red_cube} />
            </div>
        </div>
    );
};

export default ContactPageMain;
