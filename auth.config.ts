import { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import bcrypt from "bcryptjs";

import { LoginSchema } from "./schema/auth-schema";
import { getUserByEmail } from "./data/user";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "youremail@provider.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "******",
        },
      },
      async authorize(credentials, req) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);

          if (!user || !user.password) return null;

          const isPasswordMatch = await bcrypt.compare(password, user.password);

          if (isPasswordMatch) return user;

          return null;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
