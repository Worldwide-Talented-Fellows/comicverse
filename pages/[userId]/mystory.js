import AddCard from '../../components/dashboard/AddCard';
import DashboardSideNavbar from '../../components/dashboard/DashboardSideNavbar';
import Navbar from '../../components/dashboard/mystory/Navbar';
import styles from '../../styles/dashboard.module.css';
import MainSection from '../../components/dashboard/mystory/MainSection';

function mystory() {
    return (
        <div className={styles.container}>
            {/* left side navbar  */}
            <DashboardSideNavbar />
            {/* <VerticalLine/> */}
            <div className={styles.vertical_line}></div>
            {/* right side section  */}
            <MainSection />
        </div>
    );
}

export default mystory;
