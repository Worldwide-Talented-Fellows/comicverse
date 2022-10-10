import Top from './Top';
import styles from './MainSection.module.css';
import Bottom from './Bottom';

function MainSection() {
    return (
        <div className={styles.container}>
            <Top />
            <Bottom />
        </div>
    );
}

export default MainSection;
