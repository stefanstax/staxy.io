import { Icon } from "@iconify/react";
import classNames from "classnames";
import { type FC } from "react";

type FormSectionProps = {
  label: string;
  className?: string;
};

const FormSection: FC<FormSectionProps> = ({ label, className }) => {
  const classes = classNames(
    className,
    `w-full font-black uppercase mt-8 bg-forest p-4 text-forestLight rounded drop-shadow-md flex gap-[10px] items-center`
  );
  return (
    <h4 className={classes}>
      <Icon icon="solar:notes-minimalistic-broken" fontSize={32} /> {label}
    </h4>
  );
};

export default FormSection;
