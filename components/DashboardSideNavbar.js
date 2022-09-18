import Link from 'next/link';
import styles from '../components/DashboardSideNavbar.module.css';

import CollectionsSVG from '../public/assets/dashboardSVG/collectionsSVG';
import OverviewSVG from '../public/assets/dashboardSVG/overviewSVG';
import FriendsSVG from '../public/assets/dashboardSVG/friendsSVG';
import FavoriteSVG from '../public/assets/dashboardSVG/favoriteSVG';
import ReviewsSVG from '../public/assets/dashboardSVG/reviewsSVS';
import StorySVG from '../public/assets/dashboardSVG/storySVG';

export default function DashboardSideNavbar(props) {
  console.log(props.userId);
  return (
    <nav>
      <ul className={styles.link_container}>
        <li className={styles.links}>
          <Link href=''>
            <div className={styles.link_item}>
              <OverviewSVG/>
              <span>Overview</span>
            </div>
          </Link>
        </li>
        <li className={styles.links}>
          <Link href='/'>
            <div className={styles.link_item}>
              <CollectionsSVG/>
              <span>Collections</span>
            </div>
          </Link>
        </li>
        <li className={styles.links}>
          <Link href=''>
            <div className={styles.link_item}>
              <FavoriteSVG/>
              <span>Favourites</span>
            </div>
          </Link>
        </li>
        <li className={styles.links}>
          <Link href=''>
            <div className={styles.link_item}>
              <ReviewsSVG/>
              <span>Reviews</span>
            </div>
          </Link>
        </li>
        <li className={styles.links}>
          <Link href=''>
            <div className={styles.link_item}>
              <StorySVG/>
              <span>My Story</span>
            </div>
          </Link>
        </li>
        <li className={styles.links}>
          <Link href=''>
            <div className={styles.link_item}>
              <FriendsSVG/>
              <span>Friends</span>
            </div>
          </Link>
        </li>
      </ul>

    </nav>
  )
}


// export  async function getStaticProps(context){
//   const userId = context.params.userId;
//   return{
//     props: {
//       userId: userId
//     }
//   }
// }