import React from "react";
import Image from "next/image";
import StaxyLogo from "../../assets/images/staxy-logo.png";
import InBoundLink from "../ui/InBoundLink";
import { Icon } from "@iconify/react";
import { useSession } from "next-auth/react";

const Navigation = () => {
  const { data: session } = useSession();
  return (
    <nav className="fixed left-0 top-0 z-[999] flex max-h-[60px] min-h-[60px] w-full items-center justify-center bg-forest drop-shadow-2xl">
      <InBoundLink to="/">
        <Image
          src={StaxyLogo}
          className="hover:invert-[100%]"
          width={100}
          height={100}
          alt=""
        />
      </InBoundLink>
      {!session?.user?.image && (
        <InBoundLink
          to="/signin"
          primary
          className="absolute right-5 rounded-full"
        >
          <Icon
            icon="solar:login-3-bold-duotone"
            className="ml-auto cursor-pointer transition-all hover:opacity-[75%]"
            fontSize={32}
          />
        </InBoundLink>
      )}
      {session?.user?.image && (
        <InBoundLink className="absolute right-5 rounded-full" to="/signin">
          <Image
            className="rounded-full"
            src={session?.user?.image}
            alt=""
            width={35}
            height={35}
          />
        </InBoundLink>
      )}
    </nav>
  );
};

export default Navigation;
