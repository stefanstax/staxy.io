import React from "react";
import Layout from "~/components/segments/Layout";
import InBoundLink from "~/components/ui/InBoundLink";
import { api } from "~/utils/api";

const Features = () => {
  const { data } = api.features.getFeatures.useQuery();

  const renderFeatures = data?.map((feature) => {
    const { identifier, title } = feature;
    return (
      <div
        key={identifier}
        className="flex w-full flex-wrap items-stretch justify-between rounded bg-forest text-slate-50 drop-shadow-md lg:w-[32%]"
      >
        <h4 className="w-full p-4 text-center font-black">{title}</h4>
        <InBoundLink
          className="flex w-full items-center justify-center rounded-t-none bg-forestLight uppercase"
          to={`features/${identifier}`}
        >
          Make changes
        </InBoundLink>
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
    </Layout>
  );
};

export default Features;
