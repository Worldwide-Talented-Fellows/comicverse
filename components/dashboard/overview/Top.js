import TopLeft from './TopLeft';
import TopRight from './TopRight';
import styles from './Top.module.css';

function Top() {
    return (
        <div className={styles.container}>
            <TopLeft />
            <TopRight />
        </div>
    );
}

export default Top;
