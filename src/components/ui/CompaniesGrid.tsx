import classNames from "classnames";
import { api } from "~/utils/api";
import Image from "next/image";
import Loaders from "./Loaders";

type CompaniesGridProps = {
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

const CompaniesGrid: React.FC<CompaniesGridProps> = ({ className }) => {
  const { data, isLoading, isError } = api.companies.getCompanies.useQuery();

  const classes = classNames("flex justify-center items-center w-2/12");

  const parentClasses = classNames(
    className,
    "w-full flex justify-center items-center gap-[20px] flex-wrap"
  );

  const RenderCompanies: React.FC<Props> = ({ data, classes }) => {
    return (
      <>
        {data?.map((company: CompanyProps) => (
          <div key={company.title} className={classes}>
            <Image
              className={"grayscale"}
              width={150}
              height={150}
              src={company.image}
              alt=""
            />
          </div>
        ))}
      </>
    );
  };

  return (
    <div className={parentClasses}>
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
          minHeight="min-h-[200px]"
          background="bg-forest"
        />
      )}
    </div>
  );
};

export default CompaniesGrid;
