import React from 'react';
import styles from '../../styles/signUp/signUpPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGoogle,
    faTwitter,
    faFacebook,
} from '@fortawesome/free-brands-svg-icons';

function signUp() {
    return (
        <div className={styles.container}>
            <h2>Create an account</h2>
            <form
                action="/send-data-here"
                method="post"
                className={styles.input_forms}
            >
                <label for="first">Full name</label>
                <input
                    type="text"
                    id="first"
                    name="first"
                    placeholder="e.g John Doe"
                    required
                />
                <label for="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="e.g johndoe@gmail.com"
                    required
                />
                <label for="create">Create password</label>
                <input type="password" id="create" name="create" required/>
                <label for="confirmpassword">Confirm password</label>
                <input
                    type="password"
                    id="confirmpassword"
                    name="confirmpassword"
                    required
                />

                <button type="submit">Register</button>
            </form>

            <div className={styles.fontAwesome}>
                <a href="#">
                    <FontAwesomeIcon icon={faGoogle} className={styles.icon} />
                    Google
                </a>

                <a href="#">
                    <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
                    Twitter
                </a>

                <a href="#">
                    <FontAwesomeIcon
                        icon={faFacebook}
                        className={styles.icon}
                    />
                    Facebook
                </a>
            </div>
            <p>Already has an acount? <a className={styles.text}  href='#'>LogIn here </a></p>
        </div>
    );
}

export default signUp;

