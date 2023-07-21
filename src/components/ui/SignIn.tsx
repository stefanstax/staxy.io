import { signIn, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Routes } from "../constants";
import InBoundLink from "./InBoundLink";
import Button from "./Button";

const SignIn = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      void router.push(Routes.HOME);
    }
  }, [session, router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-20">
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-1">
            <InBoundLink to={Routes.HOME} className="text-sm opacity-50">
              Back
            </InBoundLink>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={60}
              height={110}
              className="object-contain"
              priority
            />
            <h1 className="text-sm">Log in or sign up</h1>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Button onClick={() => void signIn("github")} className="shadow-lg">
            Continue with GitHub
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
