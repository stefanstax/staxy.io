import InBoundLink from "./InBoundLink";
import classNames from "classnames";

type CTAProps = {
  title: string;
  description?: string;
  link: string;
  label: string;
  message?: string;
  containerClass?: string;
  boxClass?: string;
  ctaOutSource?: boolean;
};

const CTA = ({
  title,
  description,
  link,
  label,
  message,
  containerClass,
  boxClass,
  ctaOutSource,
}: CTAProps) => {
  const containerClasses = classNames(
    containerClass,
    `w-full bg-gradient-to-b from-byzantine from-[20%] to-purpy text-center py-40`
  );
  const boxClasses = classNames(
    boxClass,
    `w-full max-w-[600px] rounded-[20px] text-beige drop-shadow-2xl px-4 py-10 mx-auto flex flex-col justify-center items-center`
  );
  return (
    <div className={containerClasses}>
      <div className={boxClasses}>
        <h2 className="text-[40px] font-black drop-shadow-2xl lg:text-[65px]">
          {title}
        </h2>
        <p className="my-4 mb-8 text-[20px]">{description}</p>
        <InBoundLink
          to={link}
          // cta
          ctaOutSource={ctaOutSource}
          className="byzantine-shadow w-fit min-w-[300px] rounded-[20px] bg-byzantine p-4 text-center text-[30px] uppercase no-underline hover:animate-pulse"
        >
          {label}
        </InBoundLink>
        {message && (
          <span className="mt-4 font-bold italic underline">{message}</span>
        )}
      </div>
    </div>
  );
};

export default CTA;
