import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../../lib/auth.js";
import dbConnect from "../../../lib/dbConnect.js";
import User from "../../../models/User.js";
import mongoose from "mongoose";

export default NextAuth({
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
          mongoose.connection.close();
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          mongoose.connection.close();
          throw new Error("Could not log you in!");
        }

        mongoose.connection.close();
        return { email: user.email };
      }
    })
  ]
})
