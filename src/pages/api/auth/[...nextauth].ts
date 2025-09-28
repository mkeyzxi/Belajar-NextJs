import NextAuth, {NextAuthOptions} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
	},
	secret: process.env.xNEXTAUTH_SECRET,
	providers: [
		CredentialsProvider({
			type: 'credentials',
			name: 'credentials',
			credentials: {
				email: {label: 'email', type: 'email'},
				password: {label: 'password', type: 'password'},
			},
			async authorize(credentials) {
				const {email, password} = credentials as {
					email: string;
					password: string;
				};
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				const user: any = {id: 1, email: email, password: password};
				if (user) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],
	callbacks: {
		jwt({token, account, profile, user}) {
			if (account?.provider === 'credentials') {
				token.email = user.email
			}
			return token
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		async session({session, token}: any){
			if("email" in token){
				session.user.email =token.email
			}
			return session
		}
	},
};


export default NextAuth(authOptions);