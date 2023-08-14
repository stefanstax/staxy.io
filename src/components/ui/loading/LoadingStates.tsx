import React from "react";
import { type ReactNode } from "react";
import Skeleton from "./Skeleton";

type LoadingStatesProps = {
  data: string[] | null | object[] | undefined;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  component: ReactNode;
  slider?: boolean;
  className?: string;
  skeletonGrid?: boolean;
  skeletonFull?: boolean;
};

const LoadingStates = ({
  data,
  isSuccess,
  isLoading,
  isError,
  component,
  slider,
  skeletonGrid,
  skeletonFull,
}: LoadingStatesProps) => {
  const dataLoading = isLoading;
  const dataSuccess = isSuccess;
  const dataError = isError;
  const dataHasLength = data?.length;
  return (
    <>
      {dataHasLength &&
        dataSuccess &&
        !dataLoading &&
        !dataError &&
        component &&
        component}

      {slider ? (
        dataLoading || dataError || !dataHasLength ? (
          <Skeleton
            times={6}
            skeletonFull={skeletonFull}
            skeletonGrid={skeletonGrid}
            slider
          />
        ) : null
      ) : (
        <div className="my-8 flex w-full flex-wrap gap-[20px]">
          {dataLoading || dataError || !dataHasLength ? (
            <Skeleton
              times={6}
              skeletonFull={skeletonFull}
              skeletonGrid={skeletonGrid}
            />
          ) : null}
        </div>
      )}
    </>
  );
};

export default LoadingStates;
