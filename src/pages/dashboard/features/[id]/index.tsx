import { useEffect } from "react";
import classNames from "classnames";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Layout from "~/components/segments/Layout";
import { api } from "~/utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/router";

const FeatureUpdate = () => {
  const router = useRouter();
  // ? Acquire current post's id
  const { id } = router.query;
  // ? Grab data using current id
  const { data } = api.features.getFeatureById.useQuery({
    identifier: id as string,
  });

  const { handleSubmit, register, setValue } = useForm();

  // * Work-around for un-touched fields not getting API data via hook form
  useEffect(() => {
    setValue("image", data?.image);
    setValue("title", data?.title);
    setValue("description", data?.description);
    setValue("category", data?.category);
    setValue("parent", data?.parent);
    setValue("extraClass", data?.extraClass);
    console.log(data);
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

    toast.success(`Data has been updated`, {
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
    `w-full p-4 bg-slate-50 rounded drop-shadow-md placeholder:text-slate-700 cursor-pointer`
  );

  const buttonClasses = classNames(
    `w-fit min-w-[200px] p-4 text-slate-50 drop-shadow-md uppercase rounded bg-gradient-to-r from-slate-900 to-neutral-900 font-black hover:cursor-pointer hover:from-neutral-900 hover:to-slate-900 transition-all hover:opacity-[75%]`
  );

  const pickedParent = data?.parent;

  return (
    <Layout>
      <div className="mx-auto my-48 flex w-full max-w-[1280px] flex-wrap items-center justify-center gap-[20px] px-4">
        <h1 className="w-full text-[40px] font-black uppercase underline">
          Feature Update in progress
        </h1>
        <form
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-wrap items-center justify-start gap-[20px]"
        >
          <input
            {...register("image")}
            placeholder="Feature Icon is..."
            className={inputClasses}
            defaultValue={data?.image}
          />
          <input
            {...register("title")}
            placeholder="Feature title is..."
            className={inputClasses}
            defaultValue={data?.title}
          />
          <input
            {...register("description")}
            placeholder="Feature description is..."
            className={inputClasses}
            defaultValue={data?.description}
          />
          <select
            {...register("category")}
            defaultValue={data?.category as string}
            className={inputClasses}
          >
            <option value="core">Core</option>
            <option value="module">Module</option>
          </select>
          <input
            {...register("extraClass")}
            placeholder="Feature extra class is..."
            className={inputClasses}
            defaultValue={data?.extraClass}
          />
          <select
            {...register("parent")}
            placeholder="Feature parent is..."
            className={inputClasses}
          >
            <option value="">
              Ignore this field if feature has no parent (options inside)
            </option>
            <option
              selected={pickedParent === "e-learning" ? true : false}
              value="e-learning"
            >
              E-Learning
            </option>
            <option
              selected={pickedParent === "events" ? true : false}
              value="events"
            >
              Events
            </option>
          </select>
          <button className={buttonClasses} type="submit">
            Update feature {data?.title}
          </button>
        </form>
        <ToastContainer />
      </div>
    </Layout>
  );
};

export default FeatureUpdate;
