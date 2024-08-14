import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "999594898208-1164o35c41kemv9lplduv584ps94lrmu.apps.googleusercontent.com",
      clientSecret: "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"
    }),

  ],
});

export { handler as GET, handler as POST };
