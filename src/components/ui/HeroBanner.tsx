import classNames from "classnames";
import React from "react";
import InBoundLink from "./InBoundLink";

interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaLink?: string;
  ctaMessage?: string;
  secondaryLabel?: string;
  secondaryLink?: string;
  className?: string;
  outSource?: boolean;
  ctaOutSource?: boolean;
}

const HeroBanner = ({
  title,
  subtitle,
  ctaLabel,
  ctaLink,
  ctaMessage,
  className,
  ctaOutSource,
}: HeroBannerProps) => {
  const classes = classNames(className);

  return (
    <div className={`flex w-full items-center justify-center ${classes}`}>
      <div className="mx-auto flex h-full w-full max-w-[800px] flex-wrap items-center justify-center text-center">
        <h1 className="w-full text-[40px] font-black uppercase lg:text-[55px]">
          {title}
        </h1>
        <h3 className="text-md mx-auto my-8 w-10/12 text-[20px] md:text-[30px] lg:leading-[3rem]">
          {subtitle}
        </h3>
        <div className="flex w-full flex-wrap items-center justify-center gap-[20px]">
          {ctaLink && (
            <InBoundLink
              cta
              to={ctaLink}
              ctaOutSource={ctaOutSource}
              className="flex min-h-[50px] w-full max-w-[300px] flex-auto items-center justify-center rounded text-[20px] uppercase md:w-fit"
            >
              {ctaLabel}
            </InBoundLink>
          )}
          {ctaMessage && (
            <span className="w-full text-[16px] italic">{ctaMessage}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
