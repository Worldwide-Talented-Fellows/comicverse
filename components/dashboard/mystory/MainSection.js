import styles from './MainSection.module.css';
import Navbar from './Navbar';
import AddCard from '../AddCard';
function MainSection() {
    return (
        <div className={styles.container}>
            <Navbar />
            <AddCard text="Add New Story" />
        </div>
    );
}

export default MainSection;
