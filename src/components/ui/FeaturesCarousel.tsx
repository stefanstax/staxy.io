import classNames from "classnames";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { Icon } from "@iconify/react";
import { api } from "~/utils/api";

type FeaturesCarouselProps = {
  options?: object;
  className?: string;
};

type FeatureLabelProps = {
  label: string;
};

const FeaturesCarousel = ({ className, options }: FeaturesCarouselProps) => {
  const { data, isLoading, isError } = api.features.getFeatures.useQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  const classes = classNames(
    `group flex flex-col h-full gap-[20px] justify-center items-center rounded-[20px] bg-purpy text-beige p-10 cursor-grab`
  );

  const parentClasses = classNames(className, `w-full my-24`);

  const FeatureLabel = ({ label }: FeatureLabelProps) => {
    return (
      <span className="w-full rounded-[20px] bg-beige p-2 text-center font-black uppercase italic text-purpy">
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
    </Splide>
  );
};

export default FeaturesCarousel;
