import DashboardSideNavbar from '../../components/dashboard/DashboardSideNavbar';
// import DashboardMainSection from '../../components/dashboard/DashboardMainSection'
import {useRouter} from 'next/router';
import styles from '../../styles/dashboard.module.css';
export default function Overview(props){
    
    
        // side nav bar
        return(
        <div className={styles.container}>
            {/* left side navbar  */}
            <DashboardSideNavbar />
            {/* <VerticalLine/> */}
            <div className={styles.vertical_line}></div>
            {/* right side section  */}
            {/* <DashboardMainSection /> */}
        </div>
        )
}