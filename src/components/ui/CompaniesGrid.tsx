import classNames from "classnames";
import { api } from "~/utils/api";
import Image from "next/image";
import LoadingStates from "./loading/LoadingStates";

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
  const { data, isLoading, isError, isSuccess } =
    api.companies.getCompanies.useQuery();

  const classes = classNames("flex justify-center items-center w-2/12");

  const parentClasses = classNames(
    className,
    "w-full flex justify-center items-center flex-wrap"
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

  console.log(data?.length);

  return (
    <div className={parentClasses}>
      <LoadingStates
        data={data}
        component={<RenderCompanies data={data} classes={classes} />}
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
        skeletonGrid
      />
    </div>
  );
};

export default CompaniesGrid;
