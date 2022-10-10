import React from 'react';import styles from './FavHeroes.module.css';
import HeartSVG from '../../../public/assets/dashboardSVG/heartSVG';

function FavHeroes(props) {
    return (
        <div className={styles.container}>
            <img
                src={props.hero.URL}
                alt={props.hero.heading}
                className={styles.image}
            />
            <HeartSVG className={styles.heartIcon} />
            <p className={styles.heading}>{props.hero.heading}</p>
        </div>
    );
}

export default FavHeroes;
