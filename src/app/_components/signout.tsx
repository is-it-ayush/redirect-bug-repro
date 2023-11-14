"use client";

import { signOut } from "next-auth/react";
import { Button } from "~/components/ui/button";

export const SignOutButton = () => {
  async function signOutHandler() {
    await signOut();
  }

  return (
    <Button onClick={() => { signOutHandler(); }} className="w-full">Sign Out</Button>
  );
}
