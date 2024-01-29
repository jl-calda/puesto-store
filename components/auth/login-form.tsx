"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";

import { LoginSchema } from "@/schema/auth-schema";
import { login } from "@/actions/auth/login";

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
import { FormSuccess } from "./form-success";

interface LoginFormProps {
  modal?: boolean;
}

export const LoginForm = ({ modal }: LoginFormProps) => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError(undefined);
    setSuccess(undefined);

    startTransition(() => {
      login(values).then((data) => {
        if (data.success) {
          setSuccess(data.success);
        }
        if (data.error) {
          setError(data.error);
        }
      });
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
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-4">
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-row items-center justify-between">
                      <FormLabel>Email</FormLabel>
                      <FormMessage className="text-xs" />
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
                      <FormMessage className="text-xs" />
                    </div>
                    <FormControl>
                      <InputPassword field={field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Submit</Button>
            {error && <FormError message={error} />}
            {success && <FormSuccess message={success} />}
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};
