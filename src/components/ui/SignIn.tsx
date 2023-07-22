import { signOut, useSession } from "next-auth/react";
import classNames from "classnames";
import SocialLogin from "./SocialLogin";
import Button from "./Button";

type SignInProps = {
  className: string;
};
const SignIn = ({ className }: SignInProps) => {
  const { data: session } = useSession();
  const classes = classNames(className, `flex items-center justify-center`);

  const AuthenticationState = () => {
    if (!session) {
      return (
        <div className="flex flex-wrap gap-[20px]">
          <SocialLogin provider="github" message="Continue with GitHub" />
          <SocialLogin provider="google" message="Continue with Google" />
        </div>
      );
    }

    if (session) {
      return <h4 className="font-[600]">Welcome {session.user.name}</h4>;
    }
  };

  return (
    <div className={classes}>
      <div className="flex flex-col items-start gap-[20px]">
        <p className="font-black">
          Currently we&apos;re providing GitHub as main signin option. If you
          would like to receive another provider please write to our email
          contact@staxy.io
        </p>
        <AuthenticationState />
        {session?.user?.email && (
          <Button onClick={() => void signOut()}>Sign Out</Button>
        )}
        <span className="rounded bg-orange-200 p-1 text-orange-800">
          Staxy will never have access to your most sensitive data.
        </span>
      </div>
    </div>
  );
};

export default SignIn;
