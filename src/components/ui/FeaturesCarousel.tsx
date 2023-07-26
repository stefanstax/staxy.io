import classNames from "classnames";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { Icon } from "@iconify/react";
import { api } from "~/utils/api";
import LoadingStates from "./loading/LoadingStates";

type FeaturesCarouselProps = {
  options?: object;
  className?: string;
};

type FeatureLabelProps = {
  label: string;
};

const FeaturesCarousel = ({ className, options }: FeaturesCarouselProps) => {
  const { data, isLoading, isError, isSuccess, isFetched } =
    api.features.getFeatures.useQuery();

  const classes = classNames(
    `group border border-solid border-[1px] border-forest flex flex-col h-full gap-[20px] justify-center items-center rounded bg-transparent text-forest p-10 cursor-grab`
  );

  const parentClasses = classNames(className, `w-full my-24`);

  const FeatureLabel = ({ label }: FeatureLabelProps) => {
    return (
      <span className="w-full rounded bg-forest p-2 text-center font-black uppercase italic text-forestLight">
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
      <LoadingStates
        data={data}
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
        isFetched={isFetched}
        component={renderFeatures}
        loaderElementWidth="min-w-full lg:min-w-[32.2%]"
        loaderElementHeight="min-h-[452px]"
      />
    </Splide>
  );
};

export default FeaturesCarousel;
