import React from "react";
import { Button } from "@/components/ui/button";
import { signIn, signOut } from "@/auth";

export function GetStarted({
  provider,
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("cognito");
      }}
    >
      <Button>Get started</Button>
    </form>
  );
}

export function SignOut({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="w-full"
    >
      <Button variant="ghost" className="w-full p-0" {...props}>
        Logout
      </Button>
    </form>
  );
}
