import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../models/User.js";
const { verifyPassword } = require("../../../lib/auth.js");
const dbConnect = require("../../../lib/dbConnect.js");

export default NextAuth({
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
      }
      return token
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session
    }
  },
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await dbConnect();
        const user = await User.findOne({
          email: credentials.email
        });

        if (!user) {
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error("Could not log you in!");
        }

        return {
          id: user._id,
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
          username: user.username,
          joinedOn: user.joined_on,
          emailVerified: user.email_verified,
          blogPosts: user.blog_posts,
          projectPosts: user.project_posts,
          status: user.status,
          role: user.role
        };
      }
    })
  ]
})
