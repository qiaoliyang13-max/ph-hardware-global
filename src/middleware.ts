import createMiddleware from "next-intl/middleware";
 
export default createMiddleware({
  locales: ["en", "es", "fr", "ru"],
  defaultLocale: "en",
  localePrefix: "always"
});
 
export const config = {
  matcher: [
    "/",
    "/(en|es|fr|ru)/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"
  ]
};
