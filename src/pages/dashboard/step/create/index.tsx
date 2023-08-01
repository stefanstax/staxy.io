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
import Button from "~/components/ui/Button";
import ErrorMessage from "~/components/ui/ErrorMessage";
import PageBack from "~/components/ui/PageBack";
import Switch from "~/components/ui/forms/components/Switch";
import FormSection from "~/components/ui/forms/components/FormSection";

const StepCreate = () => {
  const {
    handleSubmit,
    reset,
    register,
    control,
    formState: { errors },
  } = useForm();

  const mutation = api.steps.createStep.useMutation();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    mutation.mutate({
      title: data?.title as string,
      description: data?.description as string,
      highlight: data?.highlight as string,
      mediaSrc: data?.mediaSrc as string,
      mediaFirst: data?.mediaFirst as boolean,
      endBlock: data?.endBlock as boolean,
      order: Number(data?.order),
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
    `w-full p-4 border border-forest font-[600] rounded placeholder:text-slate-700 cursor-pointer`
  );

  return (
    <Layout>
      <div className="mx-auto my-48 flex w-full max-w-[1280px] flex-wrap items-start justify-start gap-[20px] px-4">
        <PageBack />
        <h1 className="w-full rounded bg-forest p-2 text-[40px] font-black uppercase text-forestLight drop-shadow-md">
          Feature creation
        </h1>
        <form
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-start justify-start gap-[20px]"
        >
          <FormSection label="Basic" />
          <input
            {...register("mediaSrc", {
              required: true,
              pattern: /^[a-zA-Z-:]+$/,
            })}
            placeholder="Step icon is..."
            className={inputClasses}
          />
          <ErrorMessage>
            {errors?.mediaSrc?.type === "required" && "Icon is required."}
            {errors?.mediaSrc?.type === "pattern" &&
              "Icon characters allowed: lowercase uppercase dash colon."}
          </ErrorMessage>
          <input
            {...register("title", {
              required: true,
              pattern: /^[a-zA-Z .]+$/,
            })}
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
            type="number"
            {...register("order", {
              required: true,
              pattern: /^[0-9]+$/,
            })}
            placeholder="Order is..."
            className={inputClasses}
          />
          <ErrorMessage>
            {errors?.order?.type === "required" && "order is required."}
            {errors?.order?.type === "pattern" &&
              "order characters allowed: numbers"}
          </ErrorMessage>
          <FormSection label="Optional" />
          <input
            {...register("highlight", {
              required: false,
              pattern: /^[a-zA-Z-: ]+$/,
            })}
            placeholder="Highlight classes are..."
            className={inputClasses}
          />
          <ErrorMessage>
            {errors?.highlight?.type === "pattern" &&
              `Please visit https://tailwindcss.com for guidance on styling classes.`}
          </ErrorMessage>
          <Controller
            name="mediaFirst"
            control={control}
            defaultValue={false}
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
            defaultValue={false}
            render={({ field: { value, onChange } }) => (
              <Switch
                label="endBlock"
                className={inputClasses}
                value={value as boolean}
                onChange={onChange}
              />
            )}
          />
          <Button>Create a step</Button>
        </form>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default StepCreate;
