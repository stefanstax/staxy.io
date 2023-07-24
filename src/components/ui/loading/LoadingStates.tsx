import React from "react";
import Loaders from "./Loaders";
import { type ReactNode } from "react";
import { Icon } from "@iconify/react";
import classNames from "classnames";

type LoadingStatesProps = {
  data: string[] | null | object[] | undefined;
  isLoading: boolean;
  isError: boolean;
  component?: ReactNode;
  loaderElementWidth: string;
  loaderElementHeight: string;
  slider?: boolean;
  className?: string;
  positionMiddle?: boolean;
};

const LoadingStates = ({
  data,
  isLoading,
  isError,
  component,
  loaderElementWidth,
  loaderElementHeight,
  slider,
  className,
  positionMiddle,
}: LoadingStatesProps) => {
  const classes = classNames(className, positionMiddle && `mx-auto`);
  return (
    <>
      {data?.length && !isLoading && component ? component : null}

      {slider ? (
        <>
          {data?.length && isLoading ? (
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
          {!data?.length && isError ? (
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
          {!data?.length && (
            <Loaders
              slider={slider}
              clones={5}
              loaderElementWidth={loaderElementWidth}
              loaderElementHeight={loaderElementHeight}
              contentScheme={
                <Icon icon="solar:clock-square-broken" fontSize={32} />
              }
            />
          )}
        </>
      ) : (
        <div className="my-8 flex w-full flex-wrap gap-[10px]">
          {data?.length && isLoading ? (
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
          {!data?.length && isError ? (
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
          {!data?.length && (
            <Loaders
              className={classes}
              slider={slider}
              clones={5}
              loaderElementWidth={loaderElementWidth}
              loaderElementHeight={loaderElementHeight}
              contentScheme="Staxy hasn't shared this data yet."
            />
          )}
        </div>
      )}
    </>
  );
};

export default LoadingStates;
