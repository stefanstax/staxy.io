import React from "react";
import Image from "next/image";
import StaxyLogo from "../../assets/images/staxy-logo.png";
import InBoundLink from "../ui/InBoundLink";

const Navigation = () => {
  return (
    <nav className="fixed left-0 top-0 z-[999] flex max-h-[60px] min-h-[60px] w-full items-center justify-center bg-racingYellow drop-shadow-2xl">
      <InBoundLink to="/">
        <Image
          src={StaxyLogo}
          className="invert-[100]"
          width={100}
          height={100}
          alt=""
        />
      </InBoundLink>
    </nav>
  );
};

export default Navigation;
