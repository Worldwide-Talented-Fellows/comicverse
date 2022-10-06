import styles from './Bottom.module.css';
import FavHeroes from './FavHeroes';
import AddCard from '../AddCard';

// dummy data to populate. delete it later once fetch data from backend
let favHeroes = [
    { id: 'h1', URL: 'https://bit.ly/3SysNdC', heading: 'The Batman' },
    { id: 'h2', URL: 'https://bit.ly/3SysNdC', heading: 'The Batman' },
    { id: 'h3', URL: 'https://bit.ly/3SysNdC', heading: 'The Batman' },
    { id: 'h4', URL: 'https://bit.ly/3SysNdC', heading: 'The Batman' },
    { id: 'h5', URL: 'https://bit.ly/3SysNdC', heading: 'The Batman' },
];

function DashBottom() {
    return (
        <div>
            <div className={styles.top}>
                <div className={styles.heading}>My Favourite heroes</div>
            </div>
            <div className={styles.heroes}>
                {favHeroes.map((hero) => (
                    <FavHeroes key={hero.id} hero={hero} />
                ))}
                <AddCard text="Add Fav Hero" />
            </div>
        </div>
    );
}

export default DashBottom;
