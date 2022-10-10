import DashboardSideNavbar from '../../components/dashboard/DashboardSideNavbar';
import MainSection from '../../components/dashboard/overview/MainSection';
import { useRouter } from 'next/router';
import styles from '../../styles/dashboard.module.css';
export default function Overview(props) {
    return (
        <div className={styles.container}>
            {/* left side navbar  */}
            <DashboardSideNavbar/>
            {/* <VerticalLine/> */}
            <div className={styles.vertical_line}></div>
            {/* right side section  */}
            <MainSection/>
        </div>
    );
}
