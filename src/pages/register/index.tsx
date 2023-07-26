import { SignUp } from "@clerk/nextjs";
import React from "react";
import Layout from "~/components/segments/Layout";

const Register = () => {
  return (
    <Layout>
      <div className="mx-auto flex w-full items-center justify-center py-40">
        <SignUp afterSignUpUrl="/" />
      </div>
    </Layout>
  );
};

export default Register;
