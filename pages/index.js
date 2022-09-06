import { useSession, signOut, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Home() {
	const { data: session, status } = useSession();
	const [powers, setPowers] = useState([]);

	const fetchPowersData = async () => {
		const response = await fetch(`http://localhost:3000/api/powers/random`);
		if (response.ok) {
			const data = await response.json();
			setPowers(data);
		}
	};

	useEffect(() => {
		fetchPowersData();
	}, []);

  console.log(powers);
	return (
		<div>
			{session && <div>{session.user.name}</div>}
			<div>Welcome To The Comivcerse</div>

			{/* ---- Created for the auth test purposes. Will be deleted later. -----  */}
			{!session ? <button onClick={signIn}>Sign In</button> : <button onClick={signOut}>Sign Out</button>}
      {/* {powers.map((item) => <div>item.</div>)} */}
			{/* ---- Created for the auth test purposes. Will be deleted later. -----  */}
		</div>
	);
}
