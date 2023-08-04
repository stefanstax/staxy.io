import React from "react";
import Loaders from "./Loaders";
import { Icon } from "@iconify/react";

type LoadingEditViewProps = {
  isLoading: boolean;
  isError: boolean;
  clones: number;
  loaderElementWidth: string;
  loaderElementHeight: string;
};

const LoadingEditView = ({
  isLoading,
  isError,
  clones,
  loaderElementWidth,
  loaderElementHeight,
}: LoadingEditViewProps) => {
  return (
    <>
      {isLoading && (
        <Loaders
          clones={clones || 2}
          loaderElementWidth={loaderElementWidth}
          loaderElementHeight={loaderElementHeight}
          contentScheme={
            <Icon icon="solar:clock-square-broken" fontSize={32} />
          }
          colorScheme="border-blue-800 text-blue-800"
        />
      )}
      {isError && (
        <Loaders
          clones={clones || 2}
          loaderElementWidth={loaderElementWidth}
          loaderElementHeight={loaderElementHeight}
          contentScheme={
            <Icon icon="solar:clock-square-broken" fontSize={32} />
          }
          colorScheme="border-red-600 text-red-600"
        />
      )}
    </>
  );
};

export default LoadingEditView;
