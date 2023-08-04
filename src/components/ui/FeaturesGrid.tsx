import classNames from "classnames";
import { Icon } from "@iconify/react";
import { api } from "~/utils/api";
import LoadingStates from "./loading/LoadingStates";

type FeaturesGridProps = {
  className?: string;
};

type FeatureContentProps = {
  title: string;
  description: string | null;
  id?: number;
  parent?: string | null;
  module?: string | null;
};

const FeaturesGrid = ({ className }: FeaturesGridProps) => {
  const { data, isLoading, isError, isSuccess } =
    api.features.getFeatures.useQuery();

  const classes = classNames(
    `group w-full md:w-[48%] xl:w-[32%] min-h-[400px] flex flex-col justify-between items-end gap-[20px] rounded bg-transparent text-forest border border-forest text-beige p-10 hover:bg-slate-50 transition-all`
  );

  const parentClasses = classNames(
    className,
    `w-full my-24 flex flex-wrap gap-[20px] items-center justify-start`
  );

  const FeatureContent = ({
    title,
    description,
    id,
    parent,
    module,
  }: FeatureContentProps) => {
    return (
      <div className="flex min-h-[250px] w-full flex-col items-start justify-start gap-[20px]">
        <div className="flex items-center justify-start gap-[10px]">
          <span className="text-gray-500">0{id}</span>
          {module && <span className="text-[16px] font-light">{module}</span>}
        </div>
        <h4 className="text-[30px] font-[600] uppercase">{title}</h4>
        {parent && (
          <span className="text-[16px] font-light">
            Prerequisites: {parent}
          </span>
        )}
        <p>{description}</p>
      </div>
    );
  };

  const renderFeatures = data
    ?.sort((a, b) => a.order - b.order)
    ?.map((feature) => {
      const {
        identifier,
        title,
        parent,
        description,
        image,
        extraClass,
        order,
        category,
      } = feature;
      return (
        <div key={identifier} className={`${classes} ${extraClass}`}>
          <Icon
            icon={image}
            fontSize={48}
            className="min-h-[100px] items-end transition-all group-hover:text-[64px]"
          />
          <FeatureContent
            title={title}
            description={description}
            id={order}
            module={category}
            parent={parent}
          />
        </div>
      );
    });

  return (
    <div className={parentClasses}>
      <LoadingStates
        data={data}
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
        component={renderFeatures}
        loaderElementWidth="min-w-full lg:min-w-[32.2%]"
        loaderElementHeight="min-h-[452px]"
      />
    </div>
  );
};

export default FeaturesGrid;
