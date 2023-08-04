import { Icon } from "@iconify/react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes } from "~/components/constants";
import Layout from "~/components/segments/Layout";
import Button from "~/components/ui/Button";
import InBoundLink from "~/components/ui/InBoundLink";
import PageBack from "~/components/ui/PageBack";
import LoadingStates from "~/components/ui/loading/LoadingStates";
import { api } from "~/utils/api";

const FaqList = () => {
  const { data, isLoading, isError, isSuccess } = api.faqs.getFaqs.useQuery();
  const mutation = api.faqs.deleteFaqById.useMutation();

  const handleDelete = (identifier: string, question: string) => {
    mutation.mutate({
      identifier,
    });
    toast.success(
      `You have successfully deleted feature with the following name: ${question}`,
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

  const renderFaqs = data?.map((faq) => {
    const { identifier, question } = faq;
    const numberOfFields = Object.keys(faq).length;
    return (
      <div
        key={identifier}
        className="flex min-h-[200px] w-full flex-wrap items-stretch justify-between rounded bg-forest text-slate-50 drop-shadow-md lg:w-[32.2%]"
      >
        <div className="my-4 flex flex-wrap items-center justify-start gap-[10px]">
          <h4 className="w-full px-4">
            ID: <span className="font-black uppercase">{identifier}</span>
          </h4>
          <h4 className="w-full px-4">
            Question: <span className="font-black uppercase">{question}</span>
          </h4>
          <p className="w-full gap-[5px] px-4">
            Number of registered fields: {numberOfFields}
          </p>
        </div>
        <div className="flex w-full items-end justify-center gap-[5px]">
          <InBoundLink
            className="flex w-6/12 items-center justify-center gap-[10px] rounded-none rounded-bl rounded-tr bg-forestLight uppercase no-underline"
            to={`${Routes.FAQ_EDIT + `${identifier}`}`}
          >
            <Icon icon="solar:pen-new-square-broken" fontSize={20} /> Edit
          </InBoundLink>
          <Button
            onClick={() => handleDelete(identifier, question)}
            actionDelete
          >
            <Icon icon="solar:trash-bin-2-broken" fontSize={20} /> Delete
          </Button>
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
        <InBoundLink primary to={Routes.FAQ_CREATE} className="w-full p-4">
          Create An FAQ
        </InBoundLink>
        <LoadingStates
          data={data}
          component={renderFaqs}
          isLoading={isLoading}
          isError={isError}
          isSuccess={isSuccess}
          loaderElementWidth="min-w-full lg:min-w-[32%]"
          loaderElementHeight="min-h-[200px]"
        />
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default FaqList;
