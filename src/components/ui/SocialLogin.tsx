import { Icon } from "@iconify/react";
import classNames from "classnames";
import { signIn } from "next-auth/react";
import React from "react";
import Button from "~/components/ui/Button";

type SocialLoginProps = {
  provider: string;
  message: string;
  icon: string;
  fontSize: number;
  className: string;
};

const SocialLogin = ({
  provider,
  message,
  icon,
  fontSize,
  className,
}: SocialLoginProps) => {
  const classes = classNames(className, `shadow-lg`);
  return (
    <Button onClick={() => void signIn(provider)} className={classes}>
      <Icon icon={icon} fontSize={fontSize} /> {message}
    </Button>
  );
};

export default SocialLogin;
