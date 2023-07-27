import { useEffect } from "react";
import classNames from "classnames";
import { type FieldValues, type SubmitHandler, useForm } from "react-hook-form";
import Layout from "~/components/segments/Layout";
import { api } from "~/utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/router";
import Button from "~/components/ui/Button";
import ErrorMessage from "~/components/ui/ErrorMessage";
import LoadingEditView from "~/components/ui/loading/LoadingEditView";
import PageBack from "~/components/ui/PageBack";

const FeatureUpdate = () => {
  const router = useRouter();
  // ? Acquire current post's id
  const { id } = router.query;
  // ? Grab data using current id
  const { data, isLoading, isError } = api.companies.getCompany.useQuery({
    identifier: id as string,
  });

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  // * Work-around for un-touched fields not getting API data via hook form
  useEffect(() => {
    setValue("image", data?.image);
    setValue("title", data?.title);
  }, [data]);

  // ? Use update mutation
  const mutation = api.companies.updateCompany.useMutation();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    mutation.mutate({
      identifier: id as string,
      image: data?.image as string,
      title: data?.title as string,
    });

    toast.success(`Data has been updated for ${data?.title as string}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  };

  const inputClasses = classNames(
    `w-full p-4 bg-slate-200 font-[600] rounded drop-shadow-md placeholder:text-slate-700 cursor-pointer`
  );

  return (
    <Layout>
      <div className="mx-auto my-48 flex w-full max-w-[1280px] flex-wrap items-start justify-start gap-[20px] px-4">
        <PageBack />
        <LoadingEditView
          clones={1}
          isLoading={isLoading}
          isError={isError}
          loaderElementWidth="min-w-full"
          loaderElementHeight="min-h-[400px]"
        />
        {data && (
          <>
            {" "}
            <h1 className="w-full rounded bg-forest p-2 text-[40px] font-black uppercase text-forestLight drop-shadow-md">
              Record data: {data?.title}
            </h1>
            <form
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-full flex-col items-start justify-start gap-[20px]"
            >
              <p className="w-full font-black uppercase">Basic</p>
              <input
                {...register("image", {
                  required: true,
                  pattern: /^[a-zA-Z:=./?%&_0-9 -]+$/,
                })}
                placeholder="Client Image is..."
                className={inputClasses}
                defaultValue={data?.image}
              />
              <ErrorMessage>
                {errors?.image?.type === "required" &&
                  "Image is a required field."}
                {errors?.image?.type === "pattern" &&
                  "Image accepts: lowercase, uppercase, dash and a colon"}
              </ErrorMessage>
              <input
                {...register("title", {
                  required: true,
                  pattern: /^[a-zA-Z-: ]+$/,
                })}
                placeholder="Client Name is..."
                className={inputClasses}
                defaultValue={data?.title}
              />
              <ErrorMessage>
                {errors?.title?.type === "required" &&
                  "Title is a required field."}
                {errors?.title?.type === "pattern" &&
                  "Title accepts: lowercase, uppercase, dash and a colon"}
              </ErrorMessage>
              <Button>Update Company Client</Button>
            </form>
          </>
        )}
        <ToastContainer />
      </div>
    </Layout>
  );
};

export default FeatureUpdate;
