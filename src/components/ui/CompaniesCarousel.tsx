import classNames from "classnames";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { api } from "~/utils/api";
import Image from "next/image";
import LoadingStates from "./loading/LoadingStates";
import { Icon } from "@iconify/react";
import InBoundLink from "./InBoundLink";

type CompaniesCarouselProps = {
  options?: object;
  className?: string;
};

type CompanyProps = {
  title: string;
  image: string;
};

type Props = {
  data: CompanyProps[] | undefined;
  classes?: string;
};

const CompaniesCarousel: React.FC<CompaniesCarouselProps> = ({
  options,
  className,
}) => {
  const { data, isLoading, isError, isSuccess, isFetched } =
    api.companies.getCompanies.useQuery();

  const classes = classNames(
    "w-full flex flex-col gap-[10px] justify-start items-start"
  );

  const parentClasses = classNames(className, "w-full my-8");

  // If options are missing use default options
  if (!options) {
    options = {
      arrows: true,
      pagination: false,
      perPage: 1,
      perMove: 1,
      gap: "2rem",
      padding: "0px",
      drag: false,
      snap: true,
      lazyLoad: true,
      slideFocus: true,
      mediaQuery: "min",
    };
  }

  const interceptData = data;
  const dataInterceptBlock = {
    identifier: "custom",
    image: "solar:add-square-broken",
    title: "Start Your Project",
    order: 3,
  };

  if (interceptData) {
    interceptData[3] = dataInterceptBlock;
  }

  const RenderCompanies: React.FC<Props> = ({ data, classes }) => {
    return (
      <>
        {data?.map((company: CompanyProps) => (
          <SplideSlide key={company.title} className={classes}>
            {company?.title === "Start Your Project" ? (
              <InBoundLink
                to="/contact"
                className="group flex h-full w-full flex-wrap items-end justify-stretch gap-[20px] p-[0px!important]"
              >
                <div className="flex w-full items-center justify-center rounded-[15px] text-forest">
                  <Icon fontSize={64} className="" icon={company?.image} />
                </div>
                <h4 className="= w-full rounded-[15px] border-[4px] border-solid border-forest p-4 text-center text-[20px] font-black text-forest transition-all group-hover:bg-forest group-hover:text-white">
                  {company?.title}
                </h4>
              </InBoundLink>
            ) : (
              <>
                <Image width={500} height={500} src={company.image} alt="" />
                <h4 className="bottom-0 w-full rounded-[15px] border-[4px] border-solid border-forest p-4 text-center text-[20px] font-black text-forest">
                  {company?.title}
                </h4>
              </>
            )}
          </SplideSlide>
        ))}
      </>
    );
  };

  return (
    <Splide
      hasTrack={false}
      className={parentClasses}
      options={{
        ...options,
        breakpoints: {
          640: {
            perPage: 2,
          },
          768: {
            perPage: 3,
          },
          968: {
            perPage: 4,
          },
        },
      }}

      // extensions={{ AutoScroll }}
    >
      <SplideTrack>
        <LoadingStates
          slider
          data={data}
          component={<RenderCompanies data={data} classes={classes} />}
          isLoading={isLoading}
          isError={isError}
          isSuccess={isSuccess}
          isFetched={isFetched}
          loaderElementWidth="min-w-[300px]"
          loaderElementHeight="min-h-[300px]"
          className="gap-[10px]"
        />
      </SplideTrack>
      <div className="splide__arrows splide__arrows--ltr mt-4 flex gap-[10px]">
        <button
          className="splide__arrow splide__arrow--prev rounded bg-forest p-3 text-white transition-all hover:opacity-[75%]"
          type="button"
          aria-label="Previous slide"
          aria-controls="splide01-track"
        >
          <Icon icon="solar:map-arrow-left-broken" fontSize={32} />
        </button>
        <button
          className="splide__arrow splide__arrow--next rounded bg-forest p-3 text-white transition-all hover:opacity-[75%]"
          type="button"
          aria-label="Next slide"
          aria-controls="splide01-track"
        >
          <Icon icon="solar:map-arrow-right-broken" fontSize={32} />
        </button>
      </div>
    </Splide>
  );
};

export default CompaniesCarousel;
