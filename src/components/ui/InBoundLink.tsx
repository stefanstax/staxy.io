import classNames from "classnames";
import Link from "next/link";
import { type ReactNode } from "react";

type InBoundLinkProps = {
  className?: string;
  children?: ReactNode;
  cta?: boolean;
  primary?: boolean;
  secondary?: boolean;
  currentPath?: string;
  footerLink?: boolean;
  to?: string;
  activeClassName?: string;
  outSource?: boolean;
  ctaOutSource?: boolean;
  inline?: boolean;
};

const InBoundLink = ({
  className,
  children,
  cta,
  secondary,
  currentPath,
  footerLink,
  to,
  activeClassName,
  outSource,
  ctaOutSource,
  primary,
  inline,
}: InBoundLinkProps): JSX.Element => {
  const classes = classNames(
    className,
    inline &&
      `hover:bg-[transparent!important] hover:text-[white!important] hover:opacity-[75%!important] font-[300] px-1 pr-0`,
    footerLink && `font-medium py-2 px-0`,
    `font-black p-2 rounded underline transition-all cursor-pointer hover:bg-white hover:text-forest hover:opacity-[75%]`,
    currentPath === to && activeClassName,
    cta && !secondary && `bg-forestLight text-white`,
    secondary && !cta && `bg-purpy text-white`,
    primary &&
      !secondary &&
      !cta &&
      `rounded hover:opacity-[75%] bg-forestLight hover:bg-white hover:text-forest font-black uppercase transition-all p-2 flex cursor-pointer drop-shadow-md no-underline`
  );
  return (
    <Link
      href={to ? to : "/"}
      target={outSource || ctaOutSource ? "_blank" : ""}
      className={classes}
    >
      {children}
    </Link>
  );
};

export default InBoundLink;
