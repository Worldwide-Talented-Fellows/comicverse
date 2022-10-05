import React from 'react';
import styles from './Top.module.css';
import FavComics from './FavComics'

function DashTop(props) {
    let favComics = [
        {   
            id: 'c1',
            URL: 'https://bit.ly/3SysNdC',
            heading: 'The Batman',
            ratings: '50k+',
            author: 'Bruce Wayne'
        },
        {   
            id: 'c2',
            URL: 'https://bit.ly/3SysNdC',
            heading: 'The Batman',
            ratings: '50k+',
            author: 'Bruce Wayne'
        },
        {
            id: 'c3',
            URL: 'https://bit.ly/3SysNdC',
            heading: 'The Batman',
            ratings: '50k+',
            author: 'Bruce Wayne'
        },
        {
            id: 'c4',
            URL: 'https://bit.ly/3SysNdC',
            heading: 'The Batman',
            ratings: '50k+',
            author: 'Bruce Wayne'
        },
        {
            id: 'c5',
            URL: 'https://bit.ly/3SysNdC',
            heading: 'The Batman',
            ratings: '50k+',
            author: 'Bruce Wayne'
        },
    
    ]

  return (
    <div>
        <div className={styles.top}>
            <h6 className={styles.heading}>My Favourite Comics</h6>
            <div ></div>
        </div>
        <div className={styles.comics}>
            {favComics.map((comic) =>(
                <FavComics key={comic.id} comic={comic}/>
            ))}
            
        </div>
    </div>
  )
}

export default DashTop;