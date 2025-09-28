import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.scss"

const NavBar = () => {
	const {data} = useSession();
	console.log(data)
	  return <div className={styles.navbar}>NavBar

	  {data ? 	  <div><div className="">halo {data?.user?.email}</div> <button onClick={() => signOut()}>Sing Out</button></div> : <button onClick={() => signIn()}>Sing In</button>}
	  	
	  </div>;
}

export default NavBar