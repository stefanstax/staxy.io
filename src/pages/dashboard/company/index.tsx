import { Icon } from "@iconify/react";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Routes } from "~/components/constants";
import Layout from "~/components/segments/Layout";
import InBoundLink from "~/components/ui/InBoundLink";
import PageBack from "~/components/ui/PageBack";
import LoadingStates from "~/components/ui/loading/LoadingStates";
import { api } from "~/utils/api";

const CompaniesList = () => {
  const { data, isLoading, isError, isSuccess } =
    api.companies.getCompanies.useQuery();

  const renderCompanies = data
    ?.sort((a, b) => a.order - b.order)
    ?.map((company) => {
      const { identifier, title, order } = company;
      const numberOfFields = Object.keys(company).length;
      return (
        <div
          key={identifier}
          className="flex w-full flex-wrap items-stretch justify-between rounded bg-forest text-slate-50 drop-shadow-md lg:w-[32.2%]"
        >
          <div className="my-4 flex flex-wrap items-center justify-start gap-[10px]">
            <h4 className="w-full px-4">
              ID: <span className="font-black uppercase">{identifier}</span>
            </h4>
            <h4 className="w-full px-4">
              Title: <span className="font-black uppercase">{title}</span>
            </h4>
            <p className="w-full gap-[5px] px-4">Number in dataset: #{order}</p>
            <p className="w-full gap-[5px] px-4">
              Number of registered fields: {numberOfFields}
            </p>
          </div>
          <div className="flex w-full items-center justify-center gap-[5px]">
            <InBoundLink
              className="flex w-full items-center justify-center gap-[10px] rounded-b rounded-t-none bg-forestLight uppercase no-underline"
              to={`${Routes.COMPANY_EDIT + `${identifier}`}`}
            >
              <Icon icon="solar:pen-new-square-broken" fontSize={20} /> Edit
            </InBoundLink>
          </div>
        </div>
      );
    });
  return (
    <Layout>
      <div className="mx-auto my-48 flex w-full max-w-[1280px] flex-wrap items-center justify-start gap-[20px] px-4">
        <PageBack />
        <h1 className="w-full rounded bg-forest p-2 text-[40px] font-black uppercase text-forestLight drop-shadow-md">
          Records list
        </h1>
        <InBoundLink primary to={Routes.COMPANY_CREATE} className="w-full p-4">
          Create A Company Client
        </InBoundLink>
        <LoadingStates
          data={data}
          component={renderCompanies}
          isLoading={isLoading}
          isError={isError}
          isSuccess={isSuccess}
          skeletonGrid
        />
      </div>
    </Layout>
  );
};

export default CompaniesList;
