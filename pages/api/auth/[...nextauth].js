import NextAuth from "next-auth"
import CognitoProvider from "next-auth/providers/cognito";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CognitoProvider({
        clientId: process.env.COGNITO_CLIENT_ID,
        clientSecret: process.env.COGNITO_CLIENT_SECRET,
        issuer: process.env.COGNITO_ISSUER,
        idToken: true,
      }),
  ],callbacks: {
    async jwt({ token }) {
      return token
    },
    async session({ session, token }) {
      const { email , sub} = token
      session.user.email = email
      session.user.id = sub
      return session
    }
  }
})


