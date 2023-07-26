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
  isFetched: boolean;
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
  isFetched,
  isLoading,
  component,
  loaderElementWidth,
  loaderElementHeight,
  slider,
  className,
  positionMiddle,
}: LoadingStatesProps) => {
  const classes = classNames(className, positionMiddle && `mx-auto`);
  const dataFetchLoading = isSuccess && isFetched && isLoading && !isError;
  const dataFetchSuccess = isSuccess && isFetched;
  const dataFetchFailed = isError;
  return (
    <>
      {data?.length && dataFetchSuccess && component ? component : null}

      {slider ? (
        <>
          {data?.length && dataFetchLoading ? (
            <Loaders
              clones={5}
              loaderElementWidth={loaderElementWidth}
              loaderElementHeight={loaderElementHeight}
              colorScheme="border-blue-600 text-blue-600"
              contentScheme={
                <Icon icon="solar:clock-square-broken" fontSize={32} />
              }
            />
          ) : null}
          {dataFetchFailed ? (
            <Loaders
              clones={5}
              loaderElementWidth={loaderElementWidth}
              loaderElementHeight={loaderElementHeight}
              colorScheme="border-red-600 text-red-600"
              contentScheme={
                <Icon icon="solar:clock-square-broken" fontSize={32} />
              }
            />
          ) : null}
          {!data?.length && !dataFetchFailed ? (
            <Loaders
              slider={slider}
              clones={5}
              loaderElementWidth={loaderElementWidth}
              loaderElementHeight={loaderElementHeight}
              contentScheme={
                <Icon icon="solar:clock-square-broken" fontSize={32} />
              }
            />
          ) : null}
        </>
      ) : (
        <div className="my-8 flex w-full flex-wrap gap-[10px]">
          {data?.length && dataFetchLoading ? (
            <Loaders
              className={classes}
              clones={5}
              loaderElementWidth={loaderElementWidth}
              loaderElementHeight={loaderElementHeight}
              colorScheme="border-blue-600 text-blue-600"
              contentScheme={
                <Icon icon="solar:clock-square-broken" fontSize={32} />
              }
            />
          ) : null}
          {dataFetchFailed ? (
            <Loaders
              className={classes}
              clones={5}
              loaderElementWidth={loaderElementWidth}
              loaderElementHeight={loaderElementHeight}
              colorScheme="border-red-600 text-red-600"
              contentScheme={
                <Icon icon="solar:clock-square-broken" fontSize={32} />
              }
            />
          ) : null}
          {!data?.length && !dataFetchFailed ? (
            <Loaders
              className={classes}
              slider={slider}
              clones={5}
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
