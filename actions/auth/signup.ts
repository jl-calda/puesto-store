"use server";

import * as z from "zod";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

import { SignupSchema } from "@/schema/auth-schema";

export const signup = async (data: z.infer<typeof SignupSchema>) => {
  console.log("running signup");
  const validatedFields = SignupSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }
  const { name, email, password } = validatedFields.data;

  const existingUser = await db.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { error: "Email already exists" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return { success: "Email confirmation sent!" };
  } catch {
    return { error: "Something went wrong" };
  }
};
