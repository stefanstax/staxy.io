import React from "react";
import Image from "next/image";
import StaxyLogo from "../../assets/images/staxy-logo.png";
import InBoundLink from "../ui/InBoundLink";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";

const Navigation = () => {
  const { userId } = useAuth();
  console.log(userId);

  return (
    <nav className="fixed left-0 top-0 z-[999] flex max-h-[60px] min-h-[60px] w-full items-center justify-center bg-forest drop-shadow-2xl">
      <InBoundLink to="/" className="group">
        <Image
          src={StaxyLogo}
          className="group-hover:invert-[100%]"
          width={100}
          height={100}
          alt=""
        />
      </InBoundLink>
      <div className="absolute right-5 rounded-full text-white">
        {userId ? <UserButton afterSignOutUrl="/" /> : <SignInButton />}
      </div>
    </nav>
  );
};

export default Navigation;
