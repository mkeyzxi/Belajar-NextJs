import Link from "next/link";

const RegisterView = () => {
	  return <div>
		<h1>Register Page</h1>
		<p>Sudah punya akun? <Link href={"/auth/login"}>Login</Link></p>
	  </div>;
}

export default RegisterView;