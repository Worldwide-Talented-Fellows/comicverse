import styles from './TopLeft.module.css';
import Button from '../../Button';

function TopLeft() {
    return (
        <div className={styles.container}>
            <p className={styles.top}>
                Hi, <span className={styles.username}>Jack</span>
                <br />
                Continue reading from where you stop...
            </p>
            <div className={styles['bottom-left']}>
                <p className={styles.author}>Jack Miller</p>
                <h5 className={styles.comic}>
                    Batman:
                    <br />
                    The Dark Night Returns
                </h5>
            </div>
            <Button className={styles.btn}>Click to conitnue</Button>
        </div>
    );
}

export default TopLeft;
