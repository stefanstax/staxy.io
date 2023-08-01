import { Icon } from "@iconify/react";
import classNames from "classnames";
import { type FC } from "react";

type FormDisclaimerProps = {
  label: string;
  className?: string;
};

const FormDisclaimer: FC<FormDisclaimerProps> = ({ label, className }) => {
  const classes = classNames(
    className,
    `w-fit font-[600] bg-sky-200 p-2 text-[14px] text-sky-800 rounded drop-shadow-md flex gap-[20px] items-center`
  );
  return (
    <p className={classes}>
      <Icon
        icon="solar:info-square-broken"
        fontSize={24}
        className="min-w-[48px]"
      />{" "}
      {label}
    </p>
  );
};

export default FormDisclaimer;
