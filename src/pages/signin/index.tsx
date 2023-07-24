import React from "react";
import Layout from "~/components/segments/Layout";
import SignIn from "~/components/ui/auth/SignIn";

const SignInPage = () => {
  return (
    <Layout>
      <SignIn className="mx-auto max-w-[600px] px-4 py-40" />
    </Layout>
  );
};

export default SignInPage;
