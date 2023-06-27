import React from "react";
import Image from "next/image";
import StaxyLogo from "../../assets/images/staxy-logo.png";

const Navigation = () => {
  return (
    <nav className="fixed left-0 top-0 flex max-h-[80px] min-h-[80px] w-full items-center justify-center bg-racingYellow drop-shadow-2xl">
      <Image
        src={StaxyLogo}
        className="invert-[100]"
        width={150}
        height={150}
        alt=""
      />
    </nav>
  );
};

export default Navigation;
