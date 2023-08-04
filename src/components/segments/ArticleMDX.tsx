import classNames from "classnames";
import { ReactNode } from "react";

type ArticleMDXProps = {
  className?: string;
  children: ReactNode;
};

const ArticleMDX = ({ className, children }: ArticleMDXProps) => {
  const classes = classNames(
    `staxy__mdx px-4 bg-gradient-to-b from-forest to-matte text-[#cacaca]`,
    className
  );
  return (
    <article className={classes}>
      <div className=" mx-auto w-full max-w-[1024px] py-48">{children}</div>
    </article>
  );
};

export default ArticleMDX;
