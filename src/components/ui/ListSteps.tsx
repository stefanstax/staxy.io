import { Icon } from "@iconify/react";
import classNames from "classnames";
import { api } from "~/utils/api";
import Loaders from "./Loaders";

type ListStepsProps = {
  className: string;
  stepClass: string;
};

const ListSteps = ({ stepClass, className }: ListStepsProps) => {
  const { data, isLoading, isError } = api.steps.getSteps.useQuery();

  const classes = classNames(className, `mx-auto`);
  const stepClasses = classNames(stepClass);

  if (isLoading) {
    return (
      <div className="mx-auto my-8 flex w-full max-w-[968px] flex-wrap items-center justify-center gap-[20px]">
        <Loaders
          clones={4}
          icon="solar:card-search-broken"
          minWidth="min-w-[200px]"
          minHeight="min-h-[200px]"
          background="bg-blue-400"
        />
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div className="mx-auto my-8 flex w-full max-w-[968px] flex-wrap items-center justify-center gap-[20px]">
        <Loaders
          clones={4}
          icon="solar:card-search-broken"
          minWidth="min-w-[200px]"
          minHeight="min-h-[200px]"
          background="bg-slate-900"
          className="w-5/12"
        />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mx-auto my-8 flex w-full max-w-[968px] flex-wrap items-center justify-center gap-[20px]">
        <Loaders
          clones={4}
          icon="solar:folder-error-broken"
          minWidth="200"
          minHeight="min-h-[200px]"
          background="bg-red-400"
        />
      </div>
    );
  }

  const renderSteps = data
    ?.sort((a, b) => a.order - b.order)
    ?.map((step) => {
      const {
        title,
        description,
        highlight,
        identifier,
        mediaFirst,
        mediaSrc,
        endBlock,
      } = step;

      const endBlockImage = classNames(endBlock && `mx-auto`);

      const endBlockContent = classNames(
        endBlock ? `w-full justify-center items-center` : `w-7/12 md:w-5/12`
      );

      const endBlockContainer = classNames(
        endBlock
          ? `justify-between items-center`
          : `justify-center items-center`
      );

      return (
        <div
          key={identifier}
          className={`${endBlockContainer || ""} ${stepClasses || ""} ${
            highlight || ""
          } my-12 flex w-full flex-wrap items-center justify-between gap-[40px] px-4`}
        >
          {/* Media */}
          {mediaSrc && (
            <Icon
              icon={mediaSrc}
              fontSize={128}
              className={`${endBlockImage} w-3/12 max-w-[200px] shadow-red-700 drop-shadow-2xl md:w-5/12 ${
                mediaFirst ? "order-0" : "order-1"
              }`}
            />
          )}
          {/* Content */}
          <div className={`${endBlockContent} flex flex-col`}>
            {title && (
              <h3 className="text-[25px] font-black lg:text-[45px]">{title}</h3>
            )}
            {description && <p className="text-[20px]">{description}</p>}
          </div>
        </div>
      );
    });

  return <div className={classes}>{renderSteps}</div>;
};

export default ListSteps;
