import { NextRequest, NextResponse } from "next/server";
import { jwtDecode, JwtPayload } from "jwt-decode";

// Define route arrays for different user roles
const USER_ROUTES = [
  "/dashboard/users",
  "/dashboard/user/change-password",
];

const ADMIN_ROUTES = [
  "/dashboard",
  "/dashboard/users",
  "/dashboard/admin/profile",
  "/dashboard/admin/change-password",
];

const SUPER_ADMIN_ROUTES = [
  ...ADMIN_ROUTES,
  "/dashboard/super-admin/admins",
  "/dashboard/super-admin/add-admin",
];

// Define roles
type Role = 'USER' | 'ADMIN' | 'SUPER_ADMIN';

interface CustomJwtPayload extends JwtPayload {
  id: string;
  role: Role;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();
  const cookie = request.cookies.get("refreshToken");
  const token = cookie?.value;

  // Skip middleware for static files and internal Next.js paths
  if (pathname.startsWith('/_next/') || pathname.startsWith('/static/')) {
    return NextResponse.next();
  }

  console.log("Requested Pathname:", pathname);

  if (token) {
    let user: CustomJwtPayload;

    try {
      user = jwtDecode<CustomJwtPayload>(token);
    } catch (error) {
      console.error("Error decoding token:", error);
      url.pathname = "/signin";
      return NextResponse.redirect(url);
    }

    // Redirect to login if the token is expired or invalid
    if (!user.exp || user.exp < Date.now() / 1000) {
      console.log("Token expired or invalid");
      url.pathname = "/signin";
      return NextResponse.redirect(url);
    }

    const { role } = user;

    // Role-based route protection
    const isAdminPath = ADMIN_ROUTES.includes(pathname);
    const isSuperAdminPath = SUPER_ADMIN_ROUTES.includes(pathname);
    const isUserPath = USER_ROUTES.includes(pathname);

    console.log("User Role:", role);
    console.log("Is Admin Path:", isAdminPath);
    console.log("Is Super Admin Path:", isSuperAdminPath);
    console.log("Is User Path:", isUserPath);

    // Redirect to not-found page if access is unauthorized
    if ((isAdminPath && role == 'ADMIN')) {
      return NextResponse.next();

    }
    if (isSuperAdminPath && role == 'SUPER_ADMIN') {
      return NextResponse.next();
    }
    if (isUserPath && role == 'USER') {
      return NextResponse.next();
    }


    // Redirect to not-found page if access is unauthorized
    if ((isAdminPath && role !== 'ADMIN') ||
      (isSuperAdminPath && role !== 'SUPER_ADMIN') ||
      (isUserPath && role !== 'USER')) {
      console.log("Access denied for path:", pathname);
      url.pathname = '/not-found';
      return NextResponse.redirect(url);
    }
  } else {
    // Redirect to login page if no token is found
    console.log("No token found");
    url.pathname = "/signin";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
