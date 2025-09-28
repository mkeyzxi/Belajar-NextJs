import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
	const login = true;

	if(login){
		return NextResponse.next();
	}else {

		return NextResponse.redirect(new URL('/auth/login', req.url));
	}
}

export const config = {
	// matcher: "/products"
	matcher: ["/products", "/about"]
}