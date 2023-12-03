import NextAuth, { Session, User } from 'next-auth';
import { NextAuthOptions } from 'next-auth/index';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

interface fetchData {
  refresh?: string;
  access?: string;
  user?: User;
}

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Name', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch(process.env.NEXT_PUBLIC_RESTAPI_URL + '/apiv1/login/', {
            method: 'post',
            body: JSON.stringify(credentials),
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
          }
          const fetchData: fetchData = await res.json();
          if (fetchData.user) {
            return {
              ...fetchData.user,
              access: fetchData.access,
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error(error);
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.provider == 'credentials') {
        account.access_token = user.access;
      }
      if (user) {
        token.user = user;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      return {
        access: token.accessToken,
        ...session,
      };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
