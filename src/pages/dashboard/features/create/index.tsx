import classNames from "classnames";
import { type FieldValues, type SubmitHandler, useForm } from "react-hook-form";
import Layout from "~/components/segments/Layout";
import { api } from "~/utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "~/components/ui/Button";
import ErrorMessage from "~/components/ui/ErrorMessage";
import { useSession } from "next-auth/react";

const FeatureCreate = () => {
  const session = useSession();
  console.log(session);

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();
  const mutation = api.features.createFeature.useMutation();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    mutation.mutate({
      image: data?.image as string,
      title: data?.title as string,
      description: data?.description as string,
      category: data?.category as string,
      extraClass: data?.extraClass as string,
      parent: data?.parent as string,
    });

    toast.success(`Data has been sent to DB`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });

    reset();
  };

  const inputClasses = classNames(
    `w-full p-4 bg-slate-200 font-[600] rounded drop-shadow-md placeholder:text-slate-700 cursor-pointer`
  );

  return (
    <Layout>
      <div className="mx-auto my-48 flex w-full max-w-[1280px] flex-wrap items-start justify-start gap-[20px] px-4">
        <h1 className="w-full rounded bg-forest p-2 text-[40px] font-black uppercase text-forestLight drop-shadow-md">
          Feature creation
        </h1>
        <form
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-wrap items-center justify-start gap-[20px]"
        >
          <p className="font-black uppercase">Basic</p>
          <input
            {...register("image", { required: true, pattern: /^[a-zA-Z-:]+$/ })}
            placeholder="Feature Icon is..."
            className={inputClasses}
          />
          <ErrorMessage>
            {errors?.image?.type === "required" && "Image is required."}
            {errors?.image?.type === "pattern" &&
              "Image characters allowed: lowercase uppercase dash colon."}
          </ErrorMessage>
          <input
            {...register("title", { required: true, pattern: /^[a-zA-Z .]+$/ })}
            placeholder="Title is..."
            className={inputClasses}
          />
          <ErrorMessage>
            {errors?.title?.type === "required" && "title is required."}
            {errors?.title?.type === "pattern" &&
              "title characters allowed: lowercase uppercase space."}
          </ErrorMessage>
          <input
            {...register("description", {
              required: true,
              pattern: /^[a-zA-Z .?0-8',]+$/,
            })}
            placeholder="Description is..."
            className={inputClasses}
          />
          <ErrorMessage>
            {errors?.description?.type === "required" &&
              "description is required."}
            {errors?.description?.type === "pattern" &&
              "description characters allowed: lowercase uppercase space."}
          </ErrorMessage>
          <input
            {...register("extraClass", { pattern: /^[a-zA-Z-: ]+$/ })}
            placeholder="Extra classes..."
            className={inputClasses}
          />
          <ErrorMessage>
            {errors?.extraClass?.type === "pattern" &&
              `Please visit https://tailwindcss.com for guidance on styling classes.`}
          </ErrorMessage>
          <p className="font-black uppercase">Relational</p>
          <select {...register("category")} className={inputClasses}>
            <option value="core">Core</option>
            <option value="module">Module</option>
          </select>
          <select
            {...register("parent")}
            placeholder="Parent module?"
            className={inputClasses}
            defaultValue=""
          >
            <option value="">
              Parent module (options) - leave blank if none
            </option>
            <option value="e-learning">E-Learning</option>
            <option value="events">Events</option>
          </select>
          <Button>Create a feature</Button>
        </form>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default FeatureCreate;
