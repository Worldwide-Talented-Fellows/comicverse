import Link from 'next/link';
import styles from '/styles/about.module.css';

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <span>
                    <Link href="/">Home</Link> &gt; About Us
                </span>
                <h1>About Us</h1>
            </header>
            <section className={styles.body}>
                <div>
                    <h2>Vision</h2>
                    <p>
                        A world class model of excellence in comic
                        administration
                    </p>
                </div>

                <div>
                    <h2>Mission</h2>
                    <p>
                        To allow everyone be comfortable to express themselves
                        freely through writting comics such as articles,
                        magazines, books, novels , share stories and many more.
                    </p>
                </div>

                <div>
                    <h2>Values</h2>
                    <p>
                        Our Commitment to serving our clients and users is our
                        corporate values:
                    </p>
                    <ul>
                        <li>Integrity</li>
                        <li>Innovation</li>
                        <li>Networking</li>
                        <li>Professionalism</li>
                    </ul>
                </div>

                <div>
                    <h2>Our History</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed id feugiat et et nunc. Lectus ac in arcu facilisi.
                        Id ut pellentesque tempor dignissim nisi id.
                        Pellentesque lacus sem amet, tellus. Cras lobortis
                        integer elit interdum risus in tincidunt aliquet.
                        Faucibus purus facilisi bibendum cras. Est sed turpis
                        eros, morbi velit in ligula viverra enim. Non vestibulum
                        tristique id suspendisse scelerisque lacinia ornare
                        faucibus. Risus sed leo, ut convallis suspendisse urna.
                        Pulvinar blandit lorem quis proin turpis id et commodo
                        lobortis. Nunc at curabitur velit, faucibus tristique
                        dolor arcu nunc.
                    </p>
                </div>

                <h2>Our Goals</h2>
            </section>
        </div>
    );
};

export default AboutPage;
