// "use server";
import {authKey} from "@/constants/authkey";
import {cookies} from "next/headers";
import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";
import {IjwtPayload, getUserRole} from "./services/auth.services";
import {DecodeToken} from "./utils/jwt";

export function middleware(request: NextRequest) {
  console.log("req", request);
  const accessToken = cookies().get(authKey)?.value;
  // role === "Admin" &&
  const decodedData = DecodeToken(accessToken as string) as IjwtPayload;
  console.log(decodedData as IjwtPayload);
  decodedData as IjwtPayload;
  const role = decodedData.role;

  if (!accessToken) {
    return NextResponse.redirect(new URL("/Login", request.url));
  }
  console.log({accessToken}, {role});
  if (
    accessToken &&
    role === "Admin" &&
    request.nextUrl.pathname.startsWith("/Dashboard")
  ) {
    return NextResponse.next();
  }

  //   if (request.nextUrl.pathname.startsWith("/Dashboard")) {
  //     return NextResponse.rewrite(new URL("/Login", request.url));
  //   }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/Dashboard/:path*", "/PetPortfolio/:path"],
};
