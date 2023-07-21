import React from "react";
import Layout from "~/components/segments/Layout";
import SignIn from "~/components/ui/SignIn";

const SignInPage = () => {
  return (
    <Layout>
      <SignIn className="mx-auto max-w-[600px] py-40" />
    </Layout>
  );
};

export default SignInPage;
