import styles from '../styles/redirect.module.css';

const Redirect = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <h1>Sign Up to Comicverse Account</h1>
                    <ul>
                        <li>Create your story</li>
                        <li>Share story</li>
                        <li>Publish story</li>
                    </ul>
                    <div>
                        <button>Log In</button>
                        <button>Register</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Redirect;
