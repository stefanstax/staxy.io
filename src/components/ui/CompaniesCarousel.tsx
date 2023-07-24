import classNames from "classnames";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { api } from "~/utils/api";
import Image from "next/image";
import LoadingStates from "./loading/LoadingStates";

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
  const { data, isLoading, isError } = api.companies.getCompanies.useQuery();

  const classes = classNames(
    "flex justify-center items-center rounded bg-[#13131620]"
  );

  const parentClasses = classNames(className, "w-full");

  // If options are missing use default options
  if (!options) {
    options = {
      type: "loop",
      arrows: false,
      pagination: false,
      perPage: 1,
      perMove: 1,
      interval: 1500,
      lazyLoad: true,
      gap: "2rem",
      slideFocus: true,
      mediaQuery: "min",
    };
  }

  const RenderCompanies: React.FC<Props> = ({ data, classes }) => {
    return (
      <>
        {data?.map((company: CompanyProps) => (
          <SplideSlide key={company.title} className={classes}>
            <Image width={100} height={100} src={company.image} alt="" />
          </SplideSlide>
        ))}
      </>
    );
  };

  return (
    <Splide
      className={parentClasses}
      options={{
        ...options,
        breakpoints: {
          640: {
            perPage: 1,
          },
          768: {
            perPage: 2,
          },
          968: {
            perPage: 3,
          },
          1600: {
            perPage: 4,
          },
        },
      }}
      // extensions={{ AutoScroll }}
    >
      <LoadingStates
        slider
        data={data}
        component={<RenderCompanies data={data} classes={classes} />}
        isLoading={isLoading}
        isError={isError}
        loaderElementWidth="min-w-[200px]"
        loaderElementHeight="min-h-[100px]"
      />
    </Splide>
  );
};

export default CompaniesCarousel;
