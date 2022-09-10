import { useSession, signOut, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Navbar from '../src/components/Navbar';
import styles from '../styles/home.module.css';
export default function Home() {
    return (
        <div id="homepage">
            <Navbar />
            <div className={styles.heroContainer1}>
                <h1>Trending</h1>
                <div className={styles.heroContentContainer}>
                    <div className={styles.boxOuter}>
                        <p>
                            The great DC Reset:Why Zaslav must Examine DC Comics
                            Editorial
                        </p>
                    </div>
                    <div className={styles.boxInner}>
                        <p>
                            The great DC Reset:Why Zaslav must Examine DC Comics
                            Editorial
                        </p>
                    </div>
                    <div className={styles.boxOuter}>
                        <p>
                            The great DC Reset:Why Zaslav must Examine DC Comics
                            Editorial
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.heroContainer2}>
                <h1>Popular</h1>
                <div className={styles.heroContentContainer}>
                    <div className={styles.boxOuter}>
                        <p>
                            The great DC Reset:Why Zaslav must Examine DC Comics
                            Editorial
                        </p>
                    </div>
                    <div className={styles.boxInner}>
                        <p>
                            The great DC Reset:Why Zaslav must Examine DC Comics
                            Editorial
                        </p>
                    </div>
                    <div className={styles.boxOuter}>
                        <p>
                            The great DC Reset:Why Zaslav must Examine DC Comics
                            Editorial
                        </p>
                    </div>
                </div>
            </div>
            <div id={styles.laContainer}>
                <h1>Latest Articles</h1>
                <div>Article Content</div>
            </div>
        </div>
    );
    // /*THİS CODE IS FOR TESTING PURPOSE CAN BE WILL BE DELETED
    //   YOU CAN CHECK IF THE DATABASE IS CONNECTED BY LOOKING TO CONSOLE
    /*THİS CODE IS FOR TESTING PURPOSE CAN BE WILL BE DELETED 
	  YOU CAN CHECK IF THE DATABASE IS CONNECTED BY LOOKING TO CONSOLE

	//   YOU CAN DELETE THIS CODE IF NEEDED! 
	//
  // const { data: session, status } = useSession();
  // const [powers, setPowers] = useState([]);

  // const fetchPowersData = async () => {
  //   const response = await fetch(`http://localhost:3000/api/powers/random`);
  //   if (response.ok) {
  //     const data = await response.json();
  //     setPowers(data);
  //   }
  // };

  // // useEffect(() => {
  // //   fetchPowersData();
  // // }, []);

  // console.log(powers);
  return (
    <div>
      {session && <div>{session.user.name}</div>}
      <div>Welcome To The Comivcerse</div>

      {/* ---- Created for the auth test purposes. Will be deleted later. -----  */
    //   {!session ? (
    //     <button onClick={signIn}>Sign In</button>
    //   ) : (
    //     <button onClick={signOut}>Sign Out</button>
    //   )}
    //   {/* ---- Created for the auth test purposes. Will be deleted later. -----  */}
    // </div>
    // );
}
