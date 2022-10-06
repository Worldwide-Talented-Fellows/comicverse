import Link from 'next/link';
import styles from '../dashboard/DashboardSideNavbar.module.css';
import { useRouter } from 'next/router';
import CollectionsSVG from '../../public/assets/dashboardSVG/collectionsSVG';
import OverviewSVG from '../../public/assets/dashboardSVG/overviewSVG';
import FriendsSVG from '../../public/assets/dashboardSVG/friendsSVG';
import FavoriteSVG from '../../public/assets/dashboardSVG/favoriteSVG';
import ReviewsSVG from '../../public/assets/dashboardSVG/reviewsSVS';
import StorySVG from '../../public/assets/dashboardSVG/storySVG';

function getTopListItems(userId) {
    return [
        {
            href: `/${userId}`,
            svg: <OverviewSVG />,
            title: 'Overview',
        },
        {
            href: `/${userId}/collections`,
            svg: <CollectionsSVG />,
            title: 'Collections',
        },
        {
            href: `/${userId}/favourites`,
            svg: <FavoriteSVG />,
            title: 'Favorites',
        },
        {
            href: `/${userId}/reviews`,
            svg: <ReviewsSVG />,
            title: 'Reviews',
        },
        {
            href: `/${userId}/mystory`,
            svg: <StorySVG />,
            title: 'My Story',
        },
        {
            href: `/${userId}/friends`,
            svg: <FriendsSVG />,
            title: 'Friends',
        },
    ];
}

function getBottomListItems(userId) {
    return [
        {
            href: `/${userId}/settings`,
            svg: <CollectionsSVG />,
            title: 'Settings',
        },
        {
            href: `/`,
            svg: <CollectionsSVG />,
            title: 'Log Out',
        },
    ];
}

export default function DashboardSideNavbar(props) {
    const router = useRouter();
    const userId = router.query.userId;
    console.log(userId);
    const topListItemsMap = getTopListItems(userId);
    const topListItems = topListItemsMap.map((item, index) => (
        <li key={index} className={styles.links}>
            <Link href={item.href}>
                <div className={styles.link_item}>
                    {item.svg}
                    <span>{item.title}</span>
                </div>
            </Link>
        </li>
    ));
    const bottomListItemsMap = getBottomListItems(userId);
    const bottomListItems = bottomListItemsMap.map((item, index) => (
        <li key={index} className={styles.links}>
            <Link href={item.href}>
                <div className={styles.link_item}>
                    {item.svg}
                    <span>{item.title}</span>
                </div>
            </Link>
        </li>
    ));
    return (
        <nav className={styles.container}>
            {/* top list  */}
            <ul className={styles.link_container}>{topListItems}</ul>
            {/* settings  and logout list  */}
            <ul className={styles.link_container}>{bottomListItems}</ul>
        </nav>
    );
}

// export  async function getStaticProps(context){
//   const userId = context.params.userId;
//   return{
//     props: {
//       userId: userId
//     }
//   }
// }
