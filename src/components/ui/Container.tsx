import classNames from "classnames";
import React, { type ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className: string;
  id?: string;
};

const Container = ({ className, children, id }: ContainerProps) => {
  const classes = classNames(className);
  return (
    <div className={classes} id={id}>
      {children}
    </div>
  );
};

export default Container;
