import { createMiddleware } from 'hono/factory'

/**
 * Middleware to handle .html extension redirects
 * Redirects /path.html to /path with 301 (permanent redirect)
 */
export default createMiddleware(async (c, next) => {
  const path = new URL(c.req.url).pathname

  // Redirect .html URLs to clean URLs
  if (path.endsWith('.html')) {
    const cleanPath = path.slice(0, -5) // Remove .html
    const targetPath = cleanPath === '/index' ? '/' : cleanPath
    return c.redirect(targetPath, 301)
  }

  await next()
})
