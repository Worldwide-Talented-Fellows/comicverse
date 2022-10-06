import styles from './Bottom.module.css';
import TopComics from './TopComics';

function Bottom() {
    let topComics = [
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
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.heading}>Top Rated Comics</div>
            </div>
            <div className={styles.comics}>
                {topComics.map((comic) => (
                    <TopComics key={comic.id} comic={comic} />
                ))}
            </div>
        </div>
    );
}

export default Bottom;
