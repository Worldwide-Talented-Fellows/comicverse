import styles from '../styles/landing.module.css';
import Button from '../components/Button';

// import React from 'react';
import Image from 'next/image';
import player from '../public/assets/landing_page/Player.png';
import Star from '../public/assets/landing_page/Star.svg';

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
                    <Button className={styles.introButton}>Create story</Button>
                    <div className={styles.wrappingImage}>
                        <div>
                            <Image
                                className={styles.playerImage}
                                src={player}
                            />
                            <div className={styles.starPlacement}>
                                <Image
                                    className={styles.star}
                                    src={Star}
                                    alt="star"
                                />
                            </div>
                            <div className={styles.starPlacement2}>
                                <Image
                                    className={styles.star}
                                    src={Star}
                                    alt="star"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.starPlacement3}>
                        <Image className={styles.star} src={Star} alt="star" />
                    </div>

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
