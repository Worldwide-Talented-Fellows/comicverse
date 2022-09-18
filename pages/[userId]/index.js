import DashboardSideNavbar from '../../components/DashboardSideNavbar';
import DashboardMainSection from '../../components/DashBoardMainSection'
import {useRouter} from 'next/router';
import styles from '../../styles/dashboard.module.css';
export default function Overview(props){
    
    
        // side nav bar
        return(
        <div className={styles.container}>
            <DashboardSideNavbar />
            {/* <VerticalLine/> */}
            <div className={styles.vertical_line}></div>
            <DashboardMainSection/>
        </div>
        )
}