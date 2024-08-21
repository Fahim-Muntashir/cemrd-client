import { NextRequest, NextResponse } from "next/server";
import { decodedToken } from "./utils/jwt";



export async function middleware(request: NextRequest) {

  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();
  
  const cookie = request.cookies.get("refreshToken");
  const token = cookie?.value as string;

  const decodedTokens = decodedToken(token);
  console.log(decodedTokens);

}
