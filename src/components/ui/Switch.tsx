import { Icon } from "@iconify/react";
import classNames from "classnames";

type SwitchProps = {
  value: boolean;
  label: string;
  className: string;
  onChange: (value: boolean) => void;
};

const Switch = ({ value, onChange, className, label }: SwitchProps) => {
  const handleClick = () => {
    onChange(!value);
  };

  const classes = classNames(
    className,
    value && "bg-[#2bbf79!important]",
    `flex min-h-[40px] min-w-[150px] gap-[20px] rounded p-4 font-black`
  );
  return (
    <div onClick={handleClick} className={classes}>
      {value ? (
        <Icon icon="solar:check-square-broken" fontSize={24} />
      ) : (
        <Icon icon="solar:minus-square-broken" fontSize={24} />
      )}
      {label}
    </div>
  );
};

export default Switch;
