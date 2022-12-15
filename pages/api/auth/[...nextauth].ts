import NextAuth, { NextAuthOptions } from "next-auth";
import HubspotProvider from "next-auth/providers/hubspot";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    HubspotProvider({
      clientId: process.env.HUBSPOT_CLIENT_ID,
      clientSecret: process.env.HUBSPOT_CLIENT_SECRET,
      redirectURL: process.env.HUBSPOT_REDIRECT_URL
    })
  ],
  theme: {
    colorScheme: "light"
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
         {
          accessToken: account.access_token;
          refreshToken: account.refresh_token
        }
        return token;
      }
    }
  }
};

export default NextAuth(authOptions);
