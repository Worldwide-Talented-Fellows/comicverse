import React from 'react';
import styles from '../../styles/signIn/signIn.module.css';

import FacebookIcon from '../../public/assets/contact_page/FacebookSVG';
import GoogleIcon from '../../public/assets/contact_page/InstagramSVG';
import TwitterIcon from '../../public/assets/contact_page/TwitterSVG';

const SignInPage = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Welcome Back</h2>
            <div className={styles.wrapper}>
                <div className={styles.login_Form}>
                    <label htmlFor="">Email</label>
                    <input
                        type="text"
                        className={styles.form_Input}
                        placeholder="E.g JohnDoe@gmail.com"
                        style={{ color: 'black' }}
                    />
                    <label htmlFor="">Password</label>
                    <input
                        type="text"
                        placeholder="E.g John Joe95"
                        className={styles.form_Input}
                        style={{ color: 'black' }}
                    />
                    <button className={styles.login_btn}>Login</button>
                    <a href="#" className={styles.form_forgotPassword}>
                        Forgot your password?
                    </a>

                    <div className={styles.form_alt}>
                        <div className={styles.form_line1}></div>
                        <span className={styles.form_or}>OR</span>
                        <div className={styles.form_line2}></div>
                    </div>
                    <button className={styles.social_btn}>
                        <GoogleIcon /> <span>Google</span>
                    </button>
                    <button className={styles.social_btn}>
                        <TwitterIcon /> <span>Twitter</span>
                    </button>
                    <button className={styles.social_btn}>
                        <FacebookIcon />
                        <span>Facebook</span>
                    </button>
                    <p className={styles.create_account}>
                        <span>Dont have an account yet?</span>
                        <a href="#">Register here</a>
                    </p>
                </div>

                <div className={styles.login_image}>
                    <div className={styles.image}>
                        {/* <div className={styles.line1}></div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
