import classNames from "classnames";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Icon } from "@iconify/react";
import { api } from "~/utils/api";

type ScrollerCarouselProps = {
  options?: object;
  className?: string;
};

const ScrollerCarousel = ({ options, className }: ScrollerCarouselProps) => {
  const { data, isLoading, isError } = api.features.getFeatures.useQuery();

  const classes = classNames(
    `w-full md:w-3/12 flex gap-[20px] h-full gap-[20px] text-[12px] justify-center items-center rounded-[20px] bg-slate-50 p-4 opacity-25`
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error... {isError}</h1>;
  }

  const parentClasses = classNames(className, `w-full`);

  const FeatureLabel = ({ label }) => {
    return <span className="self-center font-black italic">{label}</span>;
  };

  // * If options are missing use default options
  if (!options) {
    options = {
      type: "loop",
      perPage: 6,
      perMove: 1,
      arrows: false,
      pagination: false,
      autoplay: "playing",
      interval: "1500",
      lazyLoad: true,
      gap: "2rem",
      slideFocus: true,
      breakpoints: {
        640: {
          perPage: 1,
        },
      },
    };
  }

  const renderFeatures = data?.map((feature) => {
    return (
      <SplideSlide
        key={feature?.title}
        className={`${classes} ${feature?.extraClass}`}
      >
        <Icon icon={feature?.image} fontSize={32} />
        <FeatureLabel label={feature?.title} />
      </SplideSlide>
    );
  });

  return (
    <Splide
      className={`${parentClasses}`}
      options={{
        ...options,
      }}
      extensions={{ AutoScroll }}
    >
      {renderFeatures}
    </Splide>
  );
};

export default ScrollerCarousel;
