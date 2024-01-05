import createMiddleware from "next-intl/middleware";

const middleware = createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "de"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",
});

export default middleware;

export const config = {
  // Skip all paths that should not be internationalized
  matcher: [
    "/((?!api|_next|.*\\..*).*)",
    "/contact",             // Include the path for the contact page
    "/[locale]/contact",    // Include the path for localized contact pages
  ],
};