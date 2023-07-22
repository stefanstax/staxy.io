import { signOut, useSession } from "next-auth/react";
import classNames from "classnames";
import SocialLogin from "./SocialLogin";
import Button from "./Button";
import Image from "next/image";
import StaxyLogo from "~/assets/images/staxy-logo.png";

type SignInProps = {
  className: string;
};
const SignIn = ({ className }: SignInProps) => {
  const { data: session } = useSession();
  const classes = classNames(className, `flex items-center justify-center`);

  const AuthenticationState = () => {
    if (!session) {
      return (
        <div className="flex w-full flex-wrap gap-[20px]">
          <SocialLogin
            icon="logos:github-icon"
            fontSize={24}
            provider="github"
            message="Continue with GitHub"
            className="flex w-full items-center justify-center gap-[20px] bg-slate-300 p-3"
          />
          <SocialLogin
            icon="logos:google-fit"
            fontSize={24}
            provider="google"
            message="Continue with Google"
            className="flex w-full items-center justify-center gap-[20px] bg-matte p-3 text-white"
          />
        </div>
      );
    }

    if (session) {
      return <h4 className="font-[600]">Welcome {session.user.name}</h4>;
    }
  };

  return (
    <div className={classes}>
      <div className="flex max-w-[400px] flex-col flex-col  items-start gap-[20px]">
        <Image
          src={StaxyLogo}
          className="mx-auto mb-10 invert-[100%]"
          alt=""
          width={100}
          height={100}
        />
        <AuthenticationState />
        {session?.user?.email && (
          <Button className="w-full" onClick={() => void signOut()}>
            Sign Out
          </Button>
        )}
        <span className="w-full rounded bg-blue-200 p-1 text-blue-800">
          Click on any social media button signs you in
        </span>
        <span className="w-full rounded bg-orange-200 p-1 text-orange-800">
          Staxy will never have access to your most sensitive data.
        </span>
      </div>
    </div>
  );
};

export default SignIn;
