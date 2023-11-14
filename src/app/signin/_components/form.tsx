"use client";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
import { Input } from "~/components/ui/input";

const SignInSchema = z.object({
  username: z.string(),
  password: z.string(),
});

type SignInSchemaValues = z.infer<typeof SignInSchema>;

export const SignInForm = () => {

  const searchParams = useSearchParams();
  const router = useRouter();
  const form = useForm<SignInSchemaValues>({
    defaultValues: {
      username: "",
      password: "",
    }
  });
  const callbackUrl = searchParams.get("callbackUrl");

  async function onSubmit(data: SignInSchemaValues) {
    try {
      const signInResult = await signIn("credentials", {
        username: data.username,
        password: data.password,
        redirect: false,
      });

      if (!signInResult || signInResult.error) {
        console.error(`An error occured: ${signInResult?.error}`);
        return;
      }
      router.push(callbackUrl ? callbackUrl : "/");
    }
    catch (e) {
      console.error(`An error occured: ${e}`);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[300px]">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="jhondoe" {...field} />
              </FormControl>
              <FormDescription>
                This is your username. Just enter jhondoe for now.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
              <FormDescription>
                Here you can just enter password. Yes, the password is
                "password".
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Sign In</Button>
      </form>
    </Form>
  );
}
