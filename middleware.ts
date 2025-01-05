import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ar"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};

// import createMiddleware from "next-intl/middleware";
// import { NextResponse } from "next/server";

// const localeMiddleware = createMiddleware({
//   locales: ["en", "ar"],
//   defaultLocale: "en",
// });

// export async function middleware(req: any) {
//   const token = req.cookies.get("authToken")?.value;
//   const pathname = req.nextUrl.pathname;

//   if (pathname.startsWith("/dashboard")) {
//     if (!token) {
//       const locale = req.nextUrl.locale || "en";
//       return NextResponse.redirect(new URL(`/${locale}/sign-in`, req.url));
//     }

//     try {
//       const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
//       const jwt = await import("jsonwebtoken");
//       jwt.verify(token, JWT_SECRET);
//     } catch {
//       const locale = req.nextUrl.locale || "en";
//       return NextResponse.redirect(new URL(`/${locale}/sign-in`, req.url));
//     }
//   }

//   return localeMiddleware(req);
// }

// export const config = {
//   matcher: ["/", "/(ar|en)/:path*", "/dashboard/:path*"],
// };
