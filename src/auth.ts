import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks:{
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}/home`
   
      // Allows callback URLs on the same origin
      if (new URL(url).origin === baseUrl) return url
   
      return baseUrl
    }
  }
})