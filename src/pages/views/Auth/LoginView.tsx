import Link from "next/link";
import { useRouter } from "next/router";
const LoginView = () => {
	

	const {push} = useRouter();
	const handlerLogin = () => {
		console.log("User logged in");
		push("/products");
	}
	return <div><h1>Login Page</h1>
		<button onClick={() => handlerLogin()}>login</button>
		<p>Belum punya akun? <Link href={"/auth/register"}>Register</Link></p>
	</div>;
}

export default LoginView;