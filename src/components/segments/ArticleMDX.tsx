import classNames from "classnames";
import { ReactNode } from "react";

type ArticleMDXProps = {
  className?: string;
  children: ReactNode;
};

const ArticleMDX = ({ className, children }: ArticleMDXProps) => {
  const classes = classNames(`staxy__mdx`, className);
  return <article className={classes}>{children}</article>;
};

export default ArticleMDX;
