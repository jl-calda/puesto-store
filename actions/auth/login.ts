"use server";

import * as z from "zod";
import { db } from "@/lib/db";
import { AuthError } from "next-auth";

import { LoginSchema } from "@/schema/auth-schema";
import { signIn } from "@/auth";

export const login = async (data: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { email, password } = validatedFields.data;

  const user = await db.user.findUnique({
    where: { email },
  });

  if (!user || !user.email || !user.password) {
    return { error: "Email doesn't exist!" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });

    return { success: "Logged in!" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};
