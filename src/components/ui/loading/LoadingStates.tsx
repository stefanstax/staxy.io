import React from "react";
import Loaders from "./Loaders";
import { type ReactNode } from "react";
import { Icon } from "@iconify/react";

type LoadingStatesProps = {
  data: string[] | null | object[] | undefined;
  isLoading: boolean;
  isError: boolean;
  component: ReactNode;
  loaderElementWidth: string;
  loaderElementHeight: string;
  slider?: boolean;
};

const LoadingStates = ({
  data,
  isLoading,
  isError,
  component,
  loaderElementWidth,
  loaderElementHeight,
  slider,
}: LoadingStatesProps) => {
  return (
    <>
      {data?.length && !isLoading ? component : null}

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
        <div className="my-8 flex w-full flex-wrap items-start items-center justify-start justify-center gap-[10px]">
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
        </div>
      )}
    </>
  );
};

export default LoadingStates;
