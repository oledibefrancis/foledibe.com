export const onRequest = async (context, next) => {
  const url = new URL(context.request.url);
  const hasFileExtension = /\.[^/]+$/.test(url.pathname);

  // Normalize trailing slash URLs to match trailingSlash: "never".
  // This is especially useful for local search results that may include `/path/`.
  if (url.pathname !== "/" && url.pathname.endsWith("/") && !hasFileExtension) {
    return context.redirect(`${url.pathname.replace(/\/+$/, "")}${url.search}`, 301);
  }

  // Redirect /blog/ paths to /posts/
  if (url.pathname.startsWith("/blog/")) {
    return context.redirect("/posts/" + url.pathname.slice(6), 301);
  }

  // Redirect /blog to /posts
  if (url.pathname === "/blog" || url.pathname === "/blog/") {
    return context.redirect("/posts", 301);
  }

  return next();
};
