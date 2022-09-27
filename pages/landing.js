import styles from '../styles/landing.module.css';
import Button from '../components/Button';

function Landing() {
    return (
        <div className={styles.mainBackground}>
            <div className={styles.container}>
                <main>
                    <div className={styles.title}>
                        Explore the world of Comic
                    </div>
                    <div className={styles.subtitle}>
                        Read interesting stories and gain power to create your
                        own article
                    </div>
                </main>
                <section className={styles.section}>
                    <Button className={styles.introButton}>
                        Create your story
                    </Button>
                    <li className={styles.listingItems}>
                        <ul className={styles.comic}>COMIC</ul>
                        <ul className={styles.comic}>COMIC</ul>
                        <ul className={styles.comic}>COMIC</ul>
                    </li>
                </section>
            </div>
        </div>
    );
}

export default Landing;
