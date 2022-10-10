import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import styles from '../../styles/signup/signuppage.module.css';
import FacebookIcon from '../../public/assets/signuppage/FacebookSVG';
import GoogleIcon from '../../public/assets/signuppage/GoogleSVG';
import TwitterIcon from '../../public/assets/signuppage/TwitterSVG';

function signUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setName('');
        setconfirmPassword('');
        setPassword('');
        setEmail('');
        const teamPayLoad = {
            email,
            name,
            password,
            confirmPassword,
        };
        console.log('payLoad:', teamPayLoad);
        //     const JSONdata = JSON.stringify(teamPayLoad);
        //     const endpoint = '/api/auth/signup';

        //     const options = {
        //         // The method is POST because we are sending data.
        //         method: 'POST',
        //         // Tell the server we're sending JSON.
        //         headers: {
        //           'Content-Type': 'application/json',
        //         },
        //         // Body of the request is the JSON data we created above.
        //         body: JSONdata,
        //       };
        //       const response = await fetch(endpoint, options)
        //     console.log('payLoad:', teamPayLoad);
        //     const result = await response.json()
        //     alert(`Is this your full name: ${result.data}`)
        //   }
        try {
            const data = await axios({
                url: 'http://localhost:3000/api/auth/signup',
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
            <form className={styles.input_forms}>
                <label htmlFor="first_name">Full name</label>
                <input
                    type="text"
                    id="first_name"
                    // name="first"
                    value={name}
                    onChange={({ target }) => setName(target?.value)}
                    placeholder="e.g John Doe"
                    required
                />
                <label htmlFor="email_field">Email</label>
                <input
                    type="text"
                    id="email_field"
                    // name="email"
                    value={email}
                    onChange={({ target }) => setEmail(target?.value)}
                    placeholder="e.g johndoe@gmail.com"
                    required
                />
                <label htmlFor="create_pwd">Create password</label>
                <input
                    type="password"
                    id="create_pwd"
                    //   name="create"
                    value={password}
                    onChange={({ target }) => setPassword(target?.value)}
                    required
                />

                <label htmlFor="confirm_pwd">Confirm password</label>
                <input
                    type="password"
                    id="confirm_pwd"
                    // name="confirmpassword"
                    value={confirmPassword}
                    onChange={({ target }) => setconfirmPassword(target?.value)}
                    required
                />

                <button type="submit" onClick={handleSubmit}>
                    Register
                </button>
            </form>

            <div className={styles.form_alt}>
                <div className={styles.form_line1}></div>
                <span className={styles.form_or}>OR</span>
                <div className={styles.form_line2}></div>
            </div>

            <div className={styles.fontAwesome}>
                <Link href="/">
                    <a>
                        <GoogleIcon className={styles.icon} />
                        Google
                    </a>
                </Link>

                <Link href="/">
                    <a>
                        <TwitterIcon className={styles.icon} />
                        Twitter
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <FacebookIcon className={styles.icon} />
                        Facebook
                    </a>
                </Link>
            </div>
            <p>
                Already has an acount?{' '}
                <a className={styles.text} href="#">
                    LogIn here
                </a>
            </p>
        </div>
    );
}

export default signUp;
