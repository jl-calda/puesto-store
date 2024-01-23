"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";

import { SignupSchema } from "@/schema/auth-schema";

import { CardWrapper } from "./card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { InputPassword } from "../input-password";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { FormError } from "./form-error";
import { signup } from "@/actions/auth/signup";
import { FormSuccess } from "./form-success";

interface SignUpFormProps {
  modal?: boolean;
}

export const SignUpForm = ({ modal }: SignUpFormProps) => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [pending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof SignupSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      signup(values)
        .then((data) => {
          if (data.success) {
            setSuccess(data.success);
          }
          if (data.error) {
            setError(data.error);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };

  return (
    <CardWrapper
      headerTitle="Sign Up"
      headerSubtitle="Register to create your puesto account"
      buttonLabel="Already have an account?"
      buttonHref="/login"
      social
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-4">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-row items-center justify-between">
                    <FormLabel>Name</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={pending}
                      placeholder="Juan Dela Cruz"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-row items-center justify-between">
                    <FormLabel>Email</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={pending}
                      placeholder="yourname@provider.com"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-row items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <InputPassword field={field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="confirmPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-row items-center justify-between">
                    <FormLabel>Confirm Password</FormLabel>
                    <FormMessage />
                  </div>
                  <FormControl>
                    <InputPassword field={field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
            {error && <FormError message={error} />}
            {success && <FormSuccess message={success} />}
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};
