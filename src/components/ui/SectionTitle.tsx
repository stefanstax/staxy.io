import classNames from "classnames";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

const SectionTitle = ({ title, subtitle, className }: SectionTitleProps) => {
  const classes = classNames(className);
  return (
    <div
      className={`${classes} flex w-full flex-col items-center justify-center`}
    >
      <h2 className="mx-auto px-4 text-center text-[35px] font-black uppercase lg:text-[55px]">
        {title}
      </h2>
      {subtitle && <p className="text-[20px]">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
