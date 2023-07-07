import classNames from "classnames";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { Icon } from "@iconify/react";
import { api } from "~/utils/api";
import Loaders from "./Loaders";

type FeaturesCarouselProps = {
  options?: object;
  className?: string;
};

type FeatureLabelProps = {
  label: string;
};

const FeaturesCarousel = ({ className, options }: FeaturesCarouselProps) => {
  const { data, isLoading, isError } = api.features.getFeatures.useQuery();

  const classes = classNames(
    `group flex flex-col h-full gap-[20px] justify-center items-center rounded bg-purpy text-beige p-10 cursor-grab`
  );

  const parentClasses = classNames(className, `w-full my-24`);

  const FeatureLabel = ({ label }: FeatureLabelProps) => {
    return (
      <span className="w-full rounded bg-beige p-2 text-center font-black uppercase italic text-purpy">
        {label}
      </span>
    );
  };

  // * If options are missing
  if (!options) {
    options = {
      perPage: 4,
      perMove: 1,
      arrows: false,
      pagination: false,
      lazyLoad: true,
      gap: "2rem",
      padding: "4rem",
      slideFocus: true,
      breakpoints: {
        640: {
          perPage: 1,
        },
      },
    };
  }
  const renderFeatures = data?.map((feature) => {
    const { identifier, title, image, extraClass } = feature;
    return (
      <SplideSlide key={identifier} className={`${classes} ${extraClass}`}>
        <Icon icon={image} fontSize={64} />
        <FeatureLabel label={title} />
      </SplideSlide>
    );
  });

  return (
    <Splide
      className={`${parentClasses}`}
      options={{
        ...options,
      }}
    >
      {renderFeatures}
      {!renderFeatures?.length && (
        <Loaders
          clones={10}
          slider
          minWidth="min-w-[200px]"
          minHeight="min-h-[200px]"
          background="bg-slate-900"
        />
      )}
    </Splide>
  );
};

export default FeaturesCarousel;
