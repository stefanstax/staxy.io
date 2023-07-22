import { signIn } from "next-auth/react";
import React from "react";
import Button from "~/components/ui/Button";

type SocialLoginProps = {
  provider: string;
  message: string;
};

const SocialLogin = ({ provider, message }: SocialLoginProps) => {
  return (
    <Button onClick={() => void signIn(provider)} className="shadow-lg">
      {message}
    </Button>
  );
};

export default SocialLogin;
