"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTransition } from "react";

import { LoginSchema } from "@/schema/auth-schema";

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
import { login } from "@/actions/auth/login";

interface LoginFormProps {
  modal?: boolean;
}

export const LoginForm = ({ modal }: LoginFormProps) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(values);

      if (!modal) {
        router.push("/");
      } else {
        router.back();
      }
    });
  };

  return (
    <CardWrapper
      headerTitle="Login"
      headerSubtitle="Enter your puesto account"
      buttonLabel="Don't have an account?"
      buttonHref="/signup"
      social
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-4">
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
                      placeholder="Enter your email"
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
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};
