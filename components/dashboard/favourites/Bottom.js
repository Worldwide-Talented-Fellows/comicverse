import React from 'react'
import styles from './Bottom.module.css';
import FavHeroes from './FavHeroes'

function DashBottom() {
    let favHeroes = [
        { id: 'c1',
        URL: 'https://bit.ly/3SysNdC',
        heading: 'The Batman'},
        { id: 'c1',
        URL: 'https://bit.ly/3SysNdC',
        heading: 'The Batman',},
        { id: 'c1',
        URL: 'https://bit.ly/3SysNdC',
        heading: 'The Batman',},
        { id: 'c1',
        URL: 'https://bit.ly/3SysNdC',
        heading: 'The Batman',},
        { id: 'c1',
        URL: 'https://bit.ly/3SysNdC',
        heading: 'The Batman',},
    ]
  return (
    <div>
        <div className={styles.top}>
            <h6 className={styles.heading}>My Favourite heroes</h6>
            <div ></div>
        </div>
        <div className={styles.heroes}>
            {favHeroes.map((hero) => (
                <FavHeroes key={hero.id} hero={hero}/>
            ))}
            
        </div>
    </div>
  )
}

export default DashBottom