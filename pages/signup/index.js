import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import styles from '../../styles/signUp/signUpPage.module.css';
import FacebookIcon from '../../public/assets/contact_page/FacebookSVG';
import GoogleIcon from '../../public/assets/contact_page/GoogleSVG';
import TwitterIcon from '../../public/assets/contact_page/TwitterSVG';

function signUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const teamPayLoad = {
            email,
            name,
            password,
            confirmPassword,
        };
        console.log('payLoad:', teamPayLoad);

        try {
        const {data} = await axios({
                url: '/api/auth/signup.js',
                method: 'POST',
                data: 'teamPayload',
            });
            // console.log('response back:', data);
        } catch (error) {
            console.log('Error:', error);
        }
    };
    return (
        <div className={styles.container}>
            <h2>Create an account</h2>
            <form
                // action="/send-data-here"
                // method="post"
                className={styles.input_forms}
            >
                <label for="first">Full name</label>
                <input
                    type="text"
                    // id="first"
                    // name="first"
                    value={name}
                    onChange={({ target }) => setName(target?.value)}
                    placeholder="e.g John Doe"
                    required
                />
                <label for="email">Email</label>
                <input
                    type="text"
                    // id="email"
                    // name="email"
                    value={email}
                    onChange={({ target }) => setEmail(target?.value)}
                    placeholder="e.g johndoe@gmail.com"
                    required
                />
                <label for="create">Create password</label>
                <input
                    type="password"
                    //  id="create"
                    //   name="create"
                    value={password}
                    onChange={({ target }) => setPassword(target?.value)}
                    required
                />

                <label for="confirmpassword">Confirm password</label>
                <input
                    type="password"
                    // id="confirmpassword"
                    // name="confirmpassword"
                    value={confirmPassword}
                    onChange={({ target }) => setconfirmPassword(target?.value)}
                    required
                />

                <button type="submit" onClick={handleSubmit}>
                    Register
                </button>
            </form>

            <div className={styles.fontAwesome}>
                <a href="#">
                    <GoogleIcon className={styles.icon} />
                    Google
                </a>

                <a href="#">
                    <TwitterIcon className={styles.icon} />
                    Twitter
                </a>

                <a href="#">
                    <FacebookIcon className={styles.icon} />
                    Facebook
                </a>
            </div>
            <p>
                Already has an acount?{' '}
                <a className={styles.text} href="#">
                    LogIn here{' '}
                </a>
            </p>
        </div>
    );
}

export default signUp;
