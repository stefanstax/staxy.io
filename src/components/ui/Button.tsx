import classNames from "classnames";
import { type ReactNode } from "react";

type ButtonProps = {
  className?: string;
  children?: ReactNode;
  actionDelete?: boolean;
  onClick?: () => void;
};

const Button = ({
  className,
  children,
  onClick,
  actionDelete,
}: ButtonProps): JSX.Element => {
  const classes = classNames(
    className,
    `font-black uppercase transition-all p-2 flex cursor-pointer drop-shadow-md`,
    !actionDelete &&
      `rounded hover:opacity-[75%] bg-forestLight hover:bg-white hover:text-forest`,
    actionDelete
      ? `w-6/12 cursor-pointer items-center justify-center gap-[10px] rounded-none rounded-br rounded-tl bg-forestLight p-2 hover:bg-red-700
    `
      : null
  );
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
