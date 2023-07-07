import { SplideSlide } from "@splidejs/react-splide";
import classNames from "classnames";
import { cloneElement, ReactNode } from "react";

type LoadersProps = {
  clones: number;
  minWidth?: string;
  minHeight?: string;
  background?: string;
  className?: string;
  slider?: boolean;
};

const Loaders = ({
  clones,
  minWidth,
  minHeight,
  background,
  className,
  slider,
}: LoadersProps): JSX.Element => {
  const classes = classNames(className);

  let element = (
    <div
      className={`${classes} flex ${minWidth || "min-w-[100px]"} ${
        minHeight || "min-h-[100px]"
      } ${
        background || "bg-slate-900"
      } animate-pulse items-center justify-center rounded`}
    ></div>
  );

  // todo If inactive by 01/08/2023 - remove logic
  {
    slider &&
      (element = (
        <SplideSlide
          className={`${classes} flex ${minWidth || "min-w-[100px]"} ${
            minHeight || "min-h-[100px]"
          } ${
            background || "bg-slate-900"
          } animate-pulse items-center justify-center rounded`}
        ></SplideSlide>
      ));
  }

  const clonedElements: ReactNode[] = Array.from(
    { length: clones },
    (_, index) => cloneElement(element, { key: index })
  );

  return <>{clonedElements}</>;
};

export default Loaders;
