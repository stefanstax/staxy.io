import classNames from "classnames";
import React from "react";

type InputFields = {
  placeholder?: string;
  defaultValue?: string | null;
  type?: string;
  className?: string;
  value?: string;
};

const Input = ({
  value,
  placeholder,
  defaultValue,
  type,
  className,
}: InputFields) => {
  const classes = classNames(
    `w-full p-4 bg-slate-50 rounded drop-shadow-md placeholder:text-slate-700`,
    className
  );
  return (
    <input
      value={value}
      placeholder={placeholder}
      defaultValue={defaultValue}
      type={type}
      className={classes}
    />
  );
};

export default Input;
