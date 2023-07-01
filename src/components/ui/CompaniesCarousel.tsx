import classNames from "classnames";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { api } from "~/utils/api";
import Image from "next/image";
import Loaders from "./Loaders";

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
    "flex justify-center items-center rounded-[20px] bg-[#13131620]"
  );

  const parentClasses = classNames(className, "w-full");

  // If options are missing use default options
  if (!options) {
    options = {
      type: "loop",
      perPage: 6,
      perMove: 1,
      arrows: false,
      pagination: false,
      autoplay: "playing",
      interval: 1500,
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
      }}
      extensions={{ AutoScroll }}
    >
      {data?.length && <RenderCompanies data={data} classes={classes} />}
      {!data?.length && (
        <Loaders
          clones={10}
          slider
          icon={
            isLoading
              ? `solar:card-search-broken`
              : !data?.length
              ? "solar:card-search-broken"
              : isError
              ? "solar:card-error-broken"
              : ""
          }
          minWidth="min-w-[200px]"
          minHeight="min-h-[100px]"
          background="bg-slate-900"
        />
      )}
    </Splide>
  );
};

export default CompaniesCarousel;
