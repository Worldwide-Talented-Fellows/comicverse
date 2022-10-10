import Image from 'next/image';
import styles from '../../styles/story.module.css';

const Story = () => {
    return (
        <>
            <article>
                <section className={styles.container}>
                    <h1 className={styles.title}>StoryTitle</h1>
                    {/* TODO: slider below to be put into own component
                        divs below are placeholders for where images are supposed to be */}
                    <div className={styles.imageContainer}>
                        <div className={styles.image}></div>
                        <div className={styles.image}></div>
                        <div className={styles.image}></div>
                        <div className={styles.image}></div>
                        <div className={styles.image}></div>
                        <div className={styles.image}></div>
                        <div className={styles.image}></div>
                        <div className={styles.image}></div>
                        <div className={styles.image}></div>
                        <div className={styles.image}></div>
                        <div className={styles.image}></div>
                        <div className={styles.image}></div>
                    </div>
                    <p className={styles.paragraph}>
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
                        dolor arcu nunc. Ut odio id magna sed hac hac morbi
                        ullamcorper. Nunc congue nisl penatibus aenean blandit
                        cras sagittis turpis. Etiam aliquet id cursus consequat.
                        Congue ac viverra ut tincidunt. Libero elementum
                        adipiscing sit arcu. Ipsum vehicula egestas sed purus.
                        Vestibulum ultricies massa tincidunt pulvinar porta
                        eget. Vivamus egestas tellus bibendum in gravida
                        fermentum. Arcu integer curabitur at eu egestas
                        porttitor. Vulputate elit, integer pharetra facilisi
                        luctus enim. Sed auctor ultrices faucibus praesent id
                        velit massa. Ornare porta tempus accumsan gravida mattis
                        habitant vitae nam. Metus, habitant nunc proin lobortis
                        accumsan, risus amet, orci vitae. Urna, aliquet sed elit
                        varius hendrerit risus, varius pharetra. In volutpat
                        pellentesque nulla duis diam. A mollis laoreet enim
                        vulputate velit ultricies. Cras adipiscing ultricies
                        nisi platea malesuada eget. Amet vitae volutpat facilisi
                        faucibus ultrices risus consectetur luctus ut. Faucibus
                        egestas volutpat molestie tristique mauris. Nibh nisl
                        cursus nec, est, magna. Nulla adipiscing faucibus
                        suspendisse amet, nibh nec fringilla condimentum
                        laoreet. Euismod arcu sed mauris, dictumst accumsan.
                        Ultricies lorem a, facilisis rhoncus ac quam aliquet
                        suspendisse suspendisse. Aenean sem sed sed pharetra.
                        Eros, eget at integer diam quisque egestas arcu,
                        convallis. Nibh commodo, mollis at faucibus a potenti
                        vitae velit ut. Sit pulvinar fusce sit interdum orci,
                        aliquam donec placerat. Pretium in mattis elementum
                        tempus nulla ac tortor phasellus. Convallis nisl
                        adipiscing lacus, elementum massa tortor. Fringilla cras
                        quis velit dolor fringilla nec viverra aenean facilisis.
                        Tincidunt magnis lacinia id massa. Ullamcorper
                        scelerisque aliquam imperdiet sollicitudin sit sit non
                        sagittis. Ut nunc ornare eget diam pretium a, ut mattis
                        enim. Diam eleifend risus urna, venenatis, pulvinar. Non
                        ultrices ut vulputate tempor. Morbi iaculis pellentesque
                        ornare amet. Lacinia sed sodales sed non massa sit
                        semper nunc. Lectus velit, aliquam cursus diam
                        tristique.
                    </p>

                    <aside className={styles.aboutAuthorContainer}>
                        <h6 className={styles.aboutAuthorTitle}>
                            About Author
                        </h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Risus, eu placerat dignissim consequat at hac
                            vitae.
                        </p>
                    </aside>
                    <section className={styles.buttonGroup}>
                        <button className={styles.tertiaryButton}>
                            <Image
                                src="/assets/share_icon.svg"
                                alt="Share"
                                width={18}
                                height={18}
                            />
                            <span>Share</span>
                        </button>
                        <button className={styles.tertiaryButton}>
                            <Image
                                src="/assets/save_icon.svg"
                                alt="Share"
                                width={18}
                                height={18}
                            />
                            <span>Save as Draft</span>
                        </button>
                        <div className={styles.modifyButtons}>
                            <button className={styles.secondaryButton}>
                                Add New Chapter
                            </button>
                            <button className={styles.primaryButton}>
                                Publish
                            </button>
                        </div>
                    </section>
                </section>
            </article>
        </>
    );
};

export default Story;
