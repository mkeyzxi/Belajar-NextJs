import NavBar from "../NavBar";
import {useRouter} from "next/router";
type AppShellProps = {
	children: React.ReactNode;
}

const disabledNavbar = ["/auth/login", "/auth/register"]


const AppShell = ({ children }: AppShellProps) => {
	
	const {pathname} = useRouter();
	
	return <main>
		{!disabledNavbar.includes(pathname) && <NavBar />}
		
		{children}
	</main>;
}

export default AppShell;