import React, { type ReactNode } from "react";

type ErrorMessageProps = {
  children: ReactNode;
};

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <p className="error__message rounded bg-red-200 p-1 font-[600] lowercase text-red-800 drop-shadow-md">
      {children}
    </p>
  );
};

export default ErrorMessage;
