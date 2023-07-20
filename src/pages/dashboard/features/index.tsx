import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "~/components/segments/Layout";
import InBoundLink from "~/components/ui/InBoundLink";
import { api } from "~/utils/api";

const FeaturesList = () => {
  const { data } = api.features.getFeatures.useQuery();
  const mutation = api.features.deleteFeatureById.useMutation();

  const handleDelete = (identifier: string, title: string) => {
    mutation.mutate({
      identifier,
    });
    toast.success(
      `You have successfully deleted feature with the following name: ${title}`,
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      }
    );
  };

  const renderFeatures = data
    ?.sort((a, b) => a.order - b.order)
    ?.map((feature) => {
      const { identifier, title } = feature;
      const numberOfFields = Object.keys(feature).length;
      return (
        <div
          key={identifier}
          className="flex w-full flex-wrap items-stretch justify-between rounded bg-forest text-slate-50 drop-shadow-md lg:w-[32%]"
        >
          <div className="my-4 flex flex-wrap items-center justify-start gap-[10px]">
            <h4 className="w-full px-4">
              ID: <span className="font-black uppercase">{identifier}</span>
            </h4>
            <h4 className="w-full px-4">
              Title: <span className="font-black uppercase">{title}</span>
            </h4>
            <p className="w-full gap-[5px] px-4">
              Number of registered fields: {numberOfFields}
            </p>
          </div>
          <div className="flex w-full items-center justify-center gap-[5px]">
            <InBoundLink
              className="flex w-6/12 items-center justify-center gap-[10px] rounded-none rounded-bl rounded-tr bg-forestLight uppercase no-underline"
              to={`features/${identifier}`}
            >
              <Icon icon="solar:pen-new-square-broken" fontSize={20} /> Edit
            </InBoundLink>
            <span
              onClick={() => handleDelete(identifier, title)}
              className="flex w-6/12 cursor-pointer items-center justify-center gap-[10px] rounded-none rounded-br rounded-tl bg-forestLight p-2 font-black uppercase transition-all hover:bg-red-700"
            >
              <Icon icon="solar:trash-bin-2-broken" fontSize={20} /> Delete
            </span>
          </div>
        </div>
      );
    });
  return (
    <Layout>
      <div className="mx-auto my-48 flex w-full max-w-[1280px] flex-wrap items-center justify-start gap-[20px] px-4">
        <h1 className="w-full text-[40px] font-black uppercase underline">
          List of all features
        </h1>
        {renderFeatures}
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default FeaturesList;
