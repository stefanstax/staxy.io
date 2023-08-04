import React from "react";
import Loaders from "./Loaders";
import { type ReactNode } from "react";
import { Icon } from "@iconify/react";
import classNames from "classnames";

type LoadingStatesProps = {
  data: string[] | null | object[] | undefined;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  component?: ReactNode;
  loaderElementWidth: string;
  loaderElementHeight: string;
  slider?: boolean;
  className?: string;
  positionMiddle?: boolean;
};

const LoadingStates = ({
  data,
  isError,
  isSuccess,
  isLoading,
  component,
  loaderElementWidth,
  loaderElementHeight,
  slider,
  className,
  positionMiddle,
}: LoadingStatesProps) => {
  const classes = classNames(className, positionMiddle && `mx-auto`);
  const dataLoading = isLoading;
  const dataSuccess = isSuccess;
  const dataError = isError;
  const dataHasLength = data?.length;
  return (
    <>
      {dataHasLength && dataSuccess && component ? component : null}

      {slider ? (
        <div className="flex gap-[20px]">
          {dataHasLength && dataLoading && !dataError ? (
            <Loaders
              clones={3}
              loaderElementWidth={loaderElementWidth}
              loaderElementHeight={loaderElementHeight}
              colorScheme="border-blue-600 text-blue-600"
              contentScheme={
                <Icon icon="solar:clock-square-broken" fontSize={32} />
              }
            />
          ) : null}
          {dataError ? (
            <Loaders
              clones={3}
              loaderElementWidth={loaderElementWidth}
              loaderElementHeight={loaderElementHeight}
              colorScheme="border-red-600 text-red-600"
              contentScheme={
                <Icon icon="solar:clock-square-broken" fontSize={32} />
              }
            />
          ) : null}
          {!dataHasLength && !dataError ? (
            <Loaders
              slider={slider}
              clones={3}
              loaderElementWidth={loaderElementWidth}
              loaderElementHeight={loaderElementHeight}
              contentScheme={
                <Icon icon="solar:clock-square-broken" fontSize={32} />
              }
            />
          ) : null}
        </div>
      ) : (
        <div className="my-8 flex w-full flex-wrap gap-[10px]">
          {dataHasLength && dataLoading && !dataError ? (
            <Loaders
              className={classes}
              clones={3}
              loaderElementWidth={loaderElementWidth}
              loaderElementHeight={loaderElementHeight}
              colorScheme="border-blue-600 text-blue-600"
              contentScheme={
                <Icon icon="solar:clock-square-broken" fontSize={32} />
              }
            />
          ) : null}
          {dataError ? (
            <Loaders
              className={classes}
              clones={3}
              loaderElementWidth={loaderElementWidth}
              loaderElementHeight={loaderElementHeight}
              colorScheme="border-red-600 text-red-600"
              contentScheme={
                <Icon icon="solar:clock-square-broken" fontSize={32} />
              }
            />
          ) : null}
          {!dataHasLength && !dataError ? (
            <Loaders
              className={classes}
              slider={slider}
              clones={3}
              loaderElementWidth={loaderElementWidth}
              loaderElementHeight={loaderElementHeight}
              contentScheme="Staxy hasn't shared this data yet."
            />
          ) : null}
        </div>
      )}
    </>
  );
};

export default LoadingStates;
