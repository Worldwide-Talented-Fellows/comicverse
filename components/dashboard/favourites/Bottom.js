import styles from './Bottom.module.css';
import FavHeroes from './FavHeroes';

function DashBottom() {
    let favHeroes = [
        { id: 'h1', URL: 'https://bit.ly/3SysNdC', heading: 'The Batman' },
        { id: 'h2', URL: 'https://bit.ly/3SysNdC', heading: 'The Batman' },
        { id: 'h3', URL: 'https://bit.ly/3SysNdC', heading: 'The Batman' },
        { id: 'h4', URL: 'https://bit.ly/3SysNdC', heading: 'The Batman' },
        { id: 'h5', URL: 'https://bit.ly/3SysNdC', heading: 'The Batman' },
    ];

    return (
        <div>
            <div className={styles.top}>
                <h6 className={styles.heading}>My Favourite heroes</h6>
                <div></div>
            </div>
            <div className={styles.heroes}>
                {favHeroes.map((hero) => (
                    <FavHeroes key={hero.id} hero={hero} />
                ))}
            </div>
        </div>
    );
}

export default DashBottom;
