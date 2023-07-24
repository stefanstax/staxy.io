import React from "react";
import Loaders from "./Loaders";
import { Icon } from "@iconify/react";

type LoadingEditViewProps = {
  isLoading: boolean;
  isError: boolean;
  clones: number;
};

const LoadingEditView = ({
  isLoading,
  isError,
  clones,
}: LoadingEditViewProps) => {
  return (
    <>
      {isLoading && (
        <Loaders
          clones={clones}
          loaderElementWidth="min-w-full"
          loaderElementHeight="min-h-[60px]"
          contentScheme={
            <Icon icon="solar:clock-square-broken" fontSize={32} />
          }
          colorScheme="border-blue-600 text-blue-600"
        />
      )}
      {isError && (
        <Loaders
          clones={clones}
          loaderElementWidth="min-w-full"
          loaderElementHeight="min-h-[60px]"
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
