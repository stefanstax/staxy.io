import { signIn, useSession } from "next-auth/react";
import Button from "./Button";
import classNames from "classnames";

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
          <Button onClick={() => void signIn("github")} className="shadow-lg">
            Continue with GitHub
          </Button>
          <Button onClick={() => void signIn("google")} className="shadow-lg">
            Continue with Google
          </Button>
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
        <span className="rounded bg-orange-200 p-1 text-orange-800">
          Staxy will never have access to your most sensitive data.
        </span>
      </div>
    </div>
  );
};

export default SignIn;
