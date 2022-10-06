import styles from './Top.module.css';
import FavComics from './FavComics';
import AddCard from '../AddCard';

// dummy data
let favComics = [
    {
        id: 'c1',
        URL: 'https://bit.ly/3SysNdC',
        heading: 'The Batman',
        ratings: '50k+',
        author: 'Bruce Wayne',
    },
    {
        id: 'c2',
        URL: 'https://bit.ly/3SysNdC',
        heading: 'The Batman',
        ratings: '50k+',
        author: 'Bruce Wayne',
    },
    {
        id: 'c3',
        URL: 'https://bit.ly/3SysNdC',
        heading: 'The Batman',
        ratings: '50k+',
        author: 'Bruce Wayne',
    },
    {
        id: 'c4',
        URL: 'https://bit.ly/3SysNdC',
        heading: 'The Batman',
        ratings: '50k+',
        author: 'Bruce Wayne',
    },
    {
        id: 'c5',
        URL: 'https://bit.ly/3SysNdC',
        heading: 'The Batman',
        ratings: '50k+',
        author: 'Bruce Wayne',
    },
];

function DashTop(props) {
    return (
        <div>
            <div className={styles.top}>
                <div className={styles.heading}>My Favourite Comics</div>
            </div>
            <div className={styles.comics}>
                {favComics.map((comic) => (
                    <FavComics key={comic.id} comic={comic} />
                ))}
                <AddCard text="Add Fav Comic" />
            </div>
        </div>
    );
}

export default DashTop;
