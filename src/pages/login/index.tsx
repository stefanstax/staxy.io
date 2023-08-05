import { SignIn, SignOutButton, useAuth } from "@clerk/nextjs";
import { NextSeo } from "next-seo";
import React from "react";
import Layout from "~/components/segments/Layout";

const SignInPage = () => {
  const { userId } = useAuth();
  return (
    <Layout>
      <div className="mx-auto flex w-full items-center justify-center py-40">
        {userId ? <SignOutButton /> : <SignIn />}
      </div>
    </Layout>
  );
};

export default SignInPage;
