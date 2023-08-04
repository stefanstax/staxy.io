import classNames from "classnames";

type SectionTitleProps = {
  title?: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

const SectionTitle = ({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: SectionTitleProps) => {
  const classes = classNames(className);
  const titleClasses = classNames(
    titleClassName,
    `w-full text-[35px] font-black lg:text-[50px] `
  );
  const subtitleClasses = classNames(
    subtitleClassName,
    `w-full text-[20px] max-w-[900px]`
  );
  return (
    <div
      className={`${classes} flex w-full flex-col items-start justify-center`}
    >
      <h2 className={titleClasses}>{title}</h2>
      {subtitle && <p className={subtitleClasses}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
