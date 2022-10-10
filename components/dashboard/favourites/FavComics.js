import styles from './FavComics.module.css';
import RatingsSVG from '../../../public/assets/dashboardSVG/ratingsSVG';
import HeartSVG from '../../../public/assets/dashboardSVG/heartSVG';

function FavComics(props) {
    return (
        <div className={styles.container}>
            <img
                src={props.comic.URL}
                alt={props.comic.heading}
                className={styles.image}
            />
            <HeartSVG className={styles.heartIcon} />
            <div className={styles.details}>
                <p className={styles.heading}>{props.comic.heading}</p>
                <div className={styles['other-details']}>
                    <div className={styles['icon-ratings']}>
                        <RatingsSVG />
                        <div className={styles.ratings}>
                            {props.comic.ratings}
                        </div>
                    </div>
                    <div className={styles.author}>{props.comic.author}</div>
                </div>
            </div>
        </div>
    );
}

export default FavComics;
