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
import PageBack from "~/components/ui/PageBack";
import FormSection from "~/components/ui/forms/components/FormSection";
import Skeleton from "~/components/ui/loading/Skeleton";

const FeatureUpdate = () => {
  const router = useRouter();
  // ? Acquire current post's id
  const { id } = router.query;
  // ? Grab data using current id
  const { data, isLoading } = api.features.getFeatureById.useQuery({
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
    setValue("description", data?.description);
    setValue("category", data?.category);
    setValue("parent", data?.parent);
    setValue("extraClass", data?.extraClass);
  }, [data]);

  // ? Use update mutation
  const mutation = api.features.updateFeature.useMutation();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    mutation.mutate({
      identifier: id as string,
      image: data?.image as string,
      title: data?.title as string,
      description: data?.description as string,
      category: data?.category as string,
      extraClass: data?.extraClass as string,
      parent: data?.parent as string,
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
        {isLoading ? (
          <Skeleton times={1} skeletonFull />
        ) : (
          data && (
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
                  {...register("image", {
                    required: true,
                    pattern: /^[a-zA-Z-:]+$/,
                  })}
                  placeholder="Icon is..."
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
                    pattern: /^[a-zA-Z-:]+$/,
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
                    pattern: /^[a-zA-Z .?0-8',-]+$/,
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
                <input
                  {...register("extraClass", { pattern: /^[a-zA-Z-: ]+$/ })}
                  placeholder="Extra class is..."
                  className={inputClasses}
                  defaultValue={data?.extraClass}
                />
                <ErrorMessage>
                  {errors?.extraClass?.type === "pattern" &&
                    `Please visit https://tailwindcss.com for guidance on styling classes.`}
                </ErrorMessage>
                <FormSection label="Relational" />
                <select
                  {...register("category")}
                  defaultValue={data?.category as string}
                  className={inputClasses}
                >
                  <option value="core">Core</option>
                  <option value="module">Module</option>
                </select>
                <select
                  {...register("parent")}
                  placeholder="Parent module?"
                  className={inputClasses}
                  defaultValue={data?.parent || ""}
                >
                  <option value="">Feature has no parent (options)</option>
                  <option value="e-learning">E-Learning</option>
                  <option value="events">Events</option>
                </select>
                <Button>Update feature</Button>
              </form>
            </>
          )
        )}
        <ToastContainer />
      </div>
    </Layout>
  );
};

export default FeatureUpdate;
