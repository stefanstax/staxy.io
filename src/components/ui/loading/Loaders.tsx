import { SplideSlide } from "@splidejs/react-splide";
import classNames from "classnames";
import { cloneElement, type ReactNode } from "react";

type LoadersProps = {
  clones: number;
  loaderElementWidth?: string;
  loaderElementHeight?: string;
  className?: string;
  slider?: boolean;
  colorScheme?: string;
  contentScheme: ReactNode;
};

const Loaders = ({
  clones,
  loaderElementWidth,
  loaderElementHeight,
  className,
  colorScheme,
  contentScheme,
  slider,
}: LoadersProps): JSX.Element => {
  const classes = classNames(className);

  let element = (
    <div
      className={`${classes} flex ${loaderElementWidth || "min-w-[100px]"} ${
        loaderElementHeight || "min-h-[100px]"
      } items-center justify-center gap-[10px] rounded border border-[1px] border-solid ${
        colorScheme || "border-forestLight text-forestLight"
      }`}
    >
      {contentScheme}
    </div>
  );

  // todo If inactive by 01/08/2023 - remove logic
  {
    slider &&
      (element = (
        <SplideSlide
          className={`${classes} flex ${
            loaderElementWidth || "min-w-[100px]"
          } ${
            loaderElementHeight || "min-h-[100px]"
          } items-center justify-center gap-[10px] rounded border border-[1px] border-solid border-forestLight ${
            colorScheme || "border-forestLight text-forestLight"
          }`}
        >
          {contentScheme}
        </SplideSlide>
      ));
  }

  const clonedElements: ReactNode[] = Array.from(
    { length: clones },
    (_, index) => cloneElement(element, { key: index })
  );

  return <>{clonedElements}</>;
};

export default Loaders;
