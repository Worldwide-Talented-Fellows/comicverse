import React from 'react';
import styles from '../../styles/signUp/signUpPage.module.css';

function signUp() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Create an account</h2>
            </div>
            <div >
                <form action="/send-data-here" method="post" className={styles.input_forms} >
                    <label for="first">Full name</label>
                    <input type="text" id="first" name="first" placeholder='e.g John Doe' required />
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" placeholder='e.g johndoe@gmail.com' />
                    <label for="create">Create password</label>
                    <input type="password" id="create" name="create" />
                    <label for="confirmpassword">Confirm password</label>
                    <input type="password" id="confirmpassword" name="confirmpassword" />

                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default signUp;
