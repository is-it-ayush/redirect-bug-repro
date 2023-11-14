import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/((?!_next/static|_next/image|assets|api|signin).*)",
};

const middleware = async (req: NextRequest) => {
  const token = await getToken({ req });
  if (!token && !req.nextUrl.pathname.startsWith("/signin")) {
    return NextResponse.redirect(new URL("/signin", req.nextUrl.origin));
  }
  return NextResponse.next();
}

export default middleware;
