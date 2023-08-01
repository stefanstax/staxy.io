import { useEffect } from "react";
import classNames from "classnames";
import {
  type FieldValues,
  type SubmitHandler,
  useForm,
  Controller,
} from "react-hook-form";
import Layout from "~/components/segments/Layout";
import { api } from "~/utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/router";
import Button from "~/components/ui/Button";
import ErrorMessage from "~/components/ui/ErrorMessage";
import LoadingEditView from "~/components/ui/loading/LoadingEditView";
import PageBack from "~/components/ui/PageBack";
import Switch from "~/components/ui/forms/components/Switch";
import FormSection from "~/components/ui/forms/components/FormSection";

const StepUpdate = () => {
  const router = useRouter();
  // ? Acquire current post's id
  const { id } = router.query;
  // ? Grab data using current id
  const { data, isLoading, isError } = api.steps.getStep.useQuery({
    identifier: id as string,
  });

  const {
    handleSubmit,
    register,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  // * Work-around for un-touched fields not getting API data via hook form
  useEffect(() => {
    setValue("title", data?.title);
    setValue("description", data?.description);
    setValue("highlight", data?.highlight);
    setValue("mediaSrc", data?.mediaSrc);
    setValue("mediaFirst", data?.mediaFirst);
    setValue("endBlock", data?.endBlock);
    setValue("order", data?.order);
  }, [data]);

  // ? Use update mutation
  const mutation = api.steps.editStep.useMutation();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    mutation.mutate({
      identifier: id as string,
      title: data?.title as string,
      description: data?.description as string,
      highlight: data?.highlight as string,
      mediaSrc: data?.mediaSrc as string,
      mediaFirst: data?.mediaFirst as boolean,
      endBlock: data?.endBlock as boolean,
      order: Number(data?.order),
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
    `w-full p-4 border border-forest font-[600] rounded placeholder:text-slate-700 cursor-pointer`
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
            <h1 className="w-full rounded bg-forest p-2 text-[40px] font-black uppercase text-forestLight drop-shadow-md">
              Record data: {data?.title}
            </h1>
            <form
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-full flex-wrap items-center justify-start gap-[20px]"
            >
              <FormSection label="Basic" />
              <input
                {...register("mediaSrc", {
                  required: true,
                  pattern: /^[a-zA-Z-:]+$/,
                })}
                placeholder="Icon is..."
                className={inputClasses}
                defaultValue={data?.mediaSrc}
              />
              <ErrorMessage>
                {errors?.mediaSrc?.type === "required" &&
                  "mediaSrc is a required field."}
                {errors?.mediaSrc?.type === "pattern" &&
                  "mediaSrc accepts: lowercase, uppercase, dash and a colon"}
              </ErrorMessage>
              <input
                {...register("title", {
                  required: true,
                  pattern: /^[a-zA-Z-: ]+$/,
                })}
                placeholder="Title is..."
                className={inputClasses}
                defaultValue={data?.title}
              />
              <ErrorMessage>
                {errors?.title?.type === "required" &&
                  "Title is a required field."}
                {errors?.title?.type === "pattern" &&
                  "Title accepts: lowercase, uppercase, dash and a colon"}
              </ErrorMessage>
              <input
                {...register("description", {
                  required: true,
                  pattern: /^[a-zA-Z .?0-8',]+$/,
                })}
                placeholder="Description is..."
                className={inputClasses}
                defaultValue={data?.description}
              />
              <ErrorMessage>
                {errors?.description?.type === "required" &&
                  "Description is a required field."}
                {errors?.description?.type === "pattern" &&
                  "Description accepts: lowercase, uppercase, dash, comma, question mark, hyphen"}
              </ErrorMessage>
              <FormSection label="Optional" />
              <input
                {...register("highlight", { pattern: /^[a-zA-Z-:[]]+$/ })}
                placeholder="Highlight classes are..."
                className={inputClasses}
                defaultValue={data?.highlight}
              />
              <ErrorMessage>
                {errors?.highlight?.type === "pattern" &&
                  `Please visit https://tailwindcss.com for guidance on styling classes.`}
              </ErrorMessage>
              <Controller
                name="mediaFirst"
                control={control}
                defaultValue={data?.mediaFirst}
                render={({ field: { value, onChange } }) => (
                  <Switch
                    label="mediaFirst"
                    className={inputClasses}
                    value={value as boolean}
                    onChange={onChange}
                  />
                )}
              />
              <Controller
                name="endBlock"
                control={control}
                defaultValue={data?.endBlock}
                render={({ field: { value, onChange } }) => (
                  <Switch
                    label="endBlock"
                    className={inputClasses}
                    value={value as boolean}
                    onChange={onChange}
                  />
                )}
              />
              <Button>Update step</Button>
            </form>
          </>
        )}
        <ToastContainer />
      </div>
    </Layout>
  );
};

export default StepUpdate;
