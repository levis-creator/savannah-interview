export { auth as middleware } from "@/auth"
export const config = {
    matcher: [
        '/',
      '/((?!login|_next/static|_next/image).*)',
    ],
  }