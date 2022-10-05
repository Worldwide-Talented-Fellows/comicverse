import styles from './ReviewsMainSection.module.css';
import Top from './Top';
import Bottom from './Bottom';

function ReviewsMainSection() {
    return (
        <div className={styles.container}>
            <Top></Top>
            {/* <Bottom></Bottom> */}
        </div>
    );
}

export default ReviewsMainSection;
