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
    "flex flex-col gap-[10px] justify-start items-start"
  );

  const parentClasses = classNames(className, "w-full my-8");

  // If options are missing use default options
  if (!options) {
    options = {
      arrows: false,
      pagination: false,
      perPage: 1,
      perMove: 1,
      interval: 1500,
      snap: true,
      lazyLoad: true,
      slideFocus: true,
      mediaQuery: "min",
    };
  }

  const RenderCompanies: React.FC<Props> = ({ data, classes }) => {
    return (
      <>
        {data?.map((company: CompanyProps) => (
          <SplideSlide key={company.title} className={classes}>
            <Image width={300} height={300} src={company.image} alt="" />
            <h4 className="bottom-0 w-full max-w-[300px] rounded-[15px] border-[4px] border-solid border-forest p-4 text-center text-[20px] font-black text-forest">
              {company?.title}
            </h4>
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
            gap: "2rem",
            perPage: 1,
          },
          768: {
            perPage: 2,
          },
          968: {
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
        loaderElementWidth="min-w-[300px]"
        loaderElementHeight="min-h-[300px]"
      />
    </Splide>
  );
};

export default CompaniesCarousel;
