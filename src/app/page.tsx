import { auth } from "@/auth";
import SstLogo from "@/components/sst-logo";
import { Button } from "@/components/ui/button";
import { GetStarted } from "@/features/authentication/auth-components";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <div className="flex flex-grow flex-col items-center justify-center space-y-4">
        <div className="flex flex-row items-center gap-10 translate-x-[-2.5rem]">
          <SstLogo />
          <Image
            src="https://next-auth.js.org/img/logo/logo-sm.png"
            alt="auth.js logo"
            width={100}
            height={100}
            priority
          />
        </div>
        <p className="text-sm text-muted-foreground">
          This app is for demonstration purposes using sst v3(ion) and Next.js
          14 Auth.js, AWS Cognito.
        </p>
        <div className="flex flex-row gap-5">
          {session && (
            <Button asChild>
              <Link href="/protected-page/session">Session </Link>
            </Button>
          )}
          {!session && <GetStarted />}
          <Button asChild variant="destructive">
            <Link href="https://github.com/gusugusu1018/sst-ion-next-auth-template">
              Source code
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
