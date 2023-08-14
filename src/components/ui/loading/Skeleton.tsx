import { SplideSlide } from "@splidejs/react-splide";
import classNames from "classnames";
import { type FC } from "react";

type SkeletonProps = {
  times: number;
  className?: string;
  skeletonFull?: boolean;
  skeletonGrid?: boolean;
  slider?: boolean;
};

const Skeleton: FC<SkeletonProps> = ({
  times,
  className,
  skeletonFull,
  skeletonGrid,
  slider,
}) => {
  const skeletonType = classNames(
    skeletonGrid && "min-h-[300px] w-full lg:w-[32.2%]",
    skeletonFull && "min-h-[100px] w-full"
  );

  const outerClassNames = classNames(
    "relative overflow-hidden bg-forest rounded-[7.5px]",
    className
  );
  const innerClassNames = classNames(
    "animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-forest via-forestLight to-forest"
  );

  const boxes = Array(times)
    .fill(0)
    .map((_, box) => {
      if (skeletonGrid && slider) {
        return (
          <SplideSlide
            key={box}
            className={`${outerClassNames} ${skeletonType}`}
          >
            <div className={`${innerClassNames}`} />
          </SplideSlide>
        );
      } else {
        return (
          <div key={box} className={`${outerClassNames} ${skeletonType}`}>
            <div className={`${innerClassNames}`} />
          </div>
        );
      }
    });

  return boxes;
};

export default Skeleton;
