import styles from './TopRight.module.css';
import Button from '../../Button';

function TopRight() {
    return (
        <div className={styles.container}>
            <div>
                <h3 className={styles.heading}>Hot Reads...</h3>
                <div className={styles.reads}>
                    <div className={styles.read1}>read1</div>
                    <div className={styles.read2}>read2</div>
                    <div className={styles.read3}>read3</div>
                    <Button className={styles.btn}>Read Now</Button>
                </div>
            </div>
            <div className="bottom">
                <h3 className={styles.heading}>My Favourite Heroes</h3>
                <div className={styles.heroes}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default TopRight;
