import NavBar from "../NavBar";

type AppShellProps = {
	children: React.ReactNode;
}
const AppShell = ({ children }: AppShellProps) => {
	return <main>
		<NavBar></NavBar>
		{children}
	</main>;
}

export default AppShell;